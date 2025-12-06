// src/lib/hooks/useCart.ts
'use client'

import { useCart as useCartContext } from '@/lib/contexts/CartContext'

export interface CourseForCart {
  id: string
  title: string
  description: string
  price: number
  discountedPrice?: number
  thumbnailUrl?: string
  instructor: {
    id: string
    name: string
  }
  category: string
}

export const useCart = () => {
  const cartContext = useCartContext()

  const addCourseToCart = (course: CourseForCart) => {
    cartContext.addToCart({
      courseId: course.id,
      title: course.title,
      description: course.description,
      price: course.price,
      discountedPrice: course.discountedPrice,
      thumbnailUrl: course.thumbnailUrl,
      instructorName: course.instructor.name,
      category: course.category
    })
  }

  const removeCourseFromCart = (courseId: string) => {
    const item = cartContext.items.find(item => item.courseId === courseId)
    if (item) {
      cartContext.removeFromCart(item.id)
    }
  }

  const updateCourseQuantity = (courseId: string, quantity: number) => {
    const item = cartContext.items.find(item => item.courseId === courseId)
    if (item) {
      cartContext.updateQuantity(item.id, quantity)
    }
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price)
  }

  const getCartSummary = () => {
    return {
      items: cartContext.items,
      totalItems: cartContext.totalItems,
      subtotal: cartContext.subtotal,
      discount: cartContext.discount,
      total: cartContext.total,
      formattedSubtotal: formatPrice(cartContext.subtotal),
      formattedDiscount: formatPrice(cartContext.discount),
      formattedTotal: formatPrice(cartContext.total)
    }
  }

  const calculateSavings = (): number => {
    return cartContext.items.reduce((savings, item) => {
      if (item.discountedPrice && item.price > item.discountedPrice) {
        return savings + (item.price - item.discountedPrice) * item.quantity
      }
      return savings
    }, 0)
  }

  const checkout = async (): Promise<{
    success: boolean
    orderId?: string
    paymentUrl?: string
    error?: string
  }> => {
    if (cartContext.items.length === 0) {
      return {
        success: false,
        error: 'Giỏ hàng trống'
      }
    }

    try {
      // Mock checkout process
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      return {
        success: true,
        orderId,
        paymentUrl: `/checkout/${orderId}`
      }
    } catch (error) {
      return {
        success: false,
        error: 'Có lỗi xảy ra khi thanh toán'
      }
    }
  }

  return {
    // State
    cart: {
      items: cartContext.items,
      totalItems: cartContext.totalItems,
      subtotal: cartContext.subtotal,
      discount: cartContext.discount,
      total: cartContext.total,
      isLoading: cartContext.isLoading
    },
    
    // Actions
    addToCart: addCourseToCart,
    removeFromCart: removeCourseFromCart,
    updateQuantity: updateCourseQuantity,
    clearCart: cartContext.clearCart,
    applyDiscount: cartContext.applyDiscount,
    removeDiscount: cartContext.removeDiscount,
    
    // Queries
    getCartItem: cartContext.getCartItem,
    isInCart: cartContext.isInCart,
    getCartSummary,
    calculateSavings,
    
    // Checkout
    checkout,
    
    // Helpers
    formatPrice
  }
}