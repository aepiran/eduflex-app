// src/lib/contexts/CartContext.tsx
'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export interface CartItem {
  id: string
  courseId: string
  title: string
  description: string
  price: number
  discountedPrice?: number
  thumbnailUrl?: string
  instructorName: string
  category: string
  quantity: number
  addedAt: Date
}

export interface CartState {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discount: number
  total: number
  isLoading: boolean
}

export interface CartContextType extends CartState {
  addToCart: (item: Omit<CartItem, 'id' | 'quantity' | 'addedAt'>) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  applyDiscount: (code: string) => Promise<boolean>
  removeDiscount: () => void
  getCartItem: (courseId: string) => CartItem | undefined
  isInCart: (courseId: string) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'id' | 'quantity' | 'addedAt'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; payload: number }
  | { type: 'REMOVE_DISCOUNT' }
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'SET_LOADING'; payload: boolean }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.courseId === action.payload.courseId)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.courseId === action.payload.courseId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        
        return calculateCartTotals({
          ...state,
          items: updatedItems
        })
      }
      
      const newItem: CartItem = {
        ...action.payload,
        id: `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        quantity: 1,
        addedAt: new Date()
      }
      
      return calculateCartTotals({
        ...state,
        items: [...state.items, newItem]
      })
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload)
      return calculateCartTotals({
        ...state,
        items: updatedItems
      })
    }
    
    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload
      
      if (quantity < 1) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: itemId })
      }
      
      const updatedItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
      
      return calculateCartTotals({
        ...state,
        items: updatedItems
      })
    }
    
    case 'CLEAR_CART':
      return {
        ...initialState,
        items: [],
        totalItems: 0,
        subtotal: 0,
        total: 0
      }
    
    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discount: action.payload,
        total: state.subtotal - action.payload
      }
    
    case 'REMOVE_DISCOUNT':
      return {
        ...state,
        discount: 0,
        total: state.subtotal
      }
    
    case 'SET_CART':
      return calculateCartTotals({
        ...state,
        items: action.payload
      })
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    
    default:
      return state
  }
}

const calculateCartTotals = (state: CartState): CartState => {
  const subtotal = state.items.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  )
  
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  const discount = state.discount
  const total = Math.max(0, subtotal - discount)
  
  return {
    ...state,
    subtotal,
    totalItems,
    total
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  discount: 0,
  total: 0,
  isLoading: false
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem('eduflex_cart')
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart)
          // Convert date strings back to Date objects
          const items = parsedCart.items.map((item: any) => ({
            ...item,
            addedAt: new Date(item.addedAt)
          }))
          dispatch({ type: 'SET_CART', payload: items })
        }
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error)
      }
    }
    
    loadCart()
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    const saveCart = () => {
      try {
        localStorage.setItem('eduflex_cart', JSON.stringify(state))
      } catch (error) {
        console.error('Failed to save cart to localStorage:', error)
      }
    }
    
    saveCart()
  }, [state])

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity' | 'addedAt'>) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
    toast.success('Đã thêm vào giỏ hàng!', {
      icon: '🛒',
      position: 'top-right'
    })
  }

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
    toast.success('Đã xóa khỏi giỏ hàng!', {
      position: 'top-right'
    })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    toast.success('Đã xóa giỏ hàng!', {
      position: 'top-right'
    })
  }

  const applyDiscount = async (code: string): Promise<boolean> => {
    dispatch({ type: 'SET_LOADING', payload: true })
    
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Example discount codes
      const discountCodes: Record<string, number> = {
        'EDUFLEX10': 0.1, // 10% discount
        'WELCOME20': 0.2, // 20% discount
        'SAVE50': 50000, // 50,000 VND discount
      }
      
      const discountValue = discountCodes[code.toUpperCase()]
      
      if (discountValue) {
        let discountAmount: number
        
        if (discountValue <= 1) {
          // Percentage discount
          discountAmount = state.subtotal * discountValue
        } else {
          // Fixed amount discount
          discountAmount = Math.min(discountValue, state.subtotal)
        }
        
        dispatch({ type: 'APPLY_DISCOUNT', payload: discountAmount })
        toast.success(`Áp dụng mã giảm giá thành công!`, {
          position: 'top-right'
        })
        return true
      } else {
        toast.error('Mã giảm giá không hợp lệ hoặc đã hết hạn', {
          position: 'top-right'
        })
        return false
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra khi áp dụng mã giảm giá', {
        position: 'top-right'
      })
      return false
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false })
    }
  }

  const removeDiscount = () => {
    dispatch({ type: 'REMOVE_DISCOUNT' })
    toast.success('Đã xóa mã giảm giá!', {
      position: 'top-right'
    })
  }

  const getCartItem = (courseId: string): CartItem | undefined => {
    return state.items.find(item => item.courseId === courseId)
  }

  const isInCart = (courseId: string): boolean => {
    return state.items.some(item => item.courseId === courseId)
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyDiscount,
        removeDiscount,
        getCartItem,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}