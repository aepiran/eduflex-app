// src/components/cart/CartIcon.tsx
'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/lib/hooks/useCart'

export default function CartIcon() {
  const { cart } = useCart()
  
  return (
    <Link href="/cart" className="relative p-2">
      <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary-600 transition-colors" />
      {cart.totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
          {cart.totalItems > 9 ? '9+' : cart.totalItems}
        </span>
      )}
    </Link>
  )
}