// src/components/cart/CartItem.tsx
'use client'

import { X, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useCart } from '@/lib/hooks/useCart'

interface CartItemProps {
  item: {
    id: string
    title: string
    description: string
    price: number
    discountedPrice?: number
    thumbnailUrl?: string
    instructorName: string
    category: string
    quantity: number
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart, formatPrice } = useCart()

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(item.id, newQuantity)
    }
  }

  const priceToShow = item.discountedPrice || item.price
  const totalPrice = priceToShow * item.quantity

  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      {/* Thumbnail */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        {item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <div className="text-3xl">📚</div>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Giảng viên: {item.instructorName}
            </p>
            <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
              {item.category}
            </span>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="px-3 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="px-4 py-1 text-gray-900 font-medium min-w-[40px] text-center">
              {item.quantity}
            </span>
            
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={item.quantity >= 10}
              className="px-3 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            {item.discountedPrice && (
              <div className="text-sm text-gray-500 line-through">
                {formatPrice(item.price * item.quantity)}
              </div>
            )}
            <div className="text-xl font-bold text-primary-600">
              {formatPrice(totalPrice)}
            </div>
            {item.discountedPrice && (
              <div className="text-sm text-green-600 font-medium mt-1">
                Tiết kiệm: {formatPrice((item.price - item.discountedPrice) * item.quantity)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}