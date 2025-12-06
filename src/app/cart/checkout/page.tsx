// src/app/cart/page.tsx
'use client'

import { ArrowLeft, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import { useCart } from '@/lib/hooks/useCart'

export default function CartPage() {
  const { cart, clearCart } = useCart()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tiếp tục mua sắm
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <ShoppingBag className="h-8 w-8 mr-3 text-primary-600" />
            Giỏ hàng của bạn
          </h1>
          <p className="text-gray-600 mt-2">
            {cart.totalItems} khóa học trong giỏ hàng
          </p>
        </div>

        {cart.items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="h-24 w-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Giỏ hàng của bạn đang trống
              </h2>
              <p className="text-gray-600 mb-8">
                Hãy khám phá các khóa học và thêm vào giỏ hàng để bắt đầu học tập!
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Khám phá khóa học
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Cart Header */}
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Chi tiết giỏ hàng
                    </h2>
                    <button
                      onClick={clearCart}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      Xóa tất cả
                    </button>
                  </div>
                </div>

                {/* Cart Items List */}
                <div className="divide-y divide-gray-200">
                  {cart.items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <div className="mt-6">
                <Link
                  href="/courses"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  ← Tiếp tục mua sắm
                </Link>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
              
              {/* Payment Methods */}
              <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Phương thức thanh toán
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Thẻ Visa/Mastercard', icon: '💳' },
                    { name: 'Ví điện tử (Momo, ZaloPay)', icon: '📱' },
                    { name: 'Chuyển khoản ngân hàng', icon: '🏦' },
                    { name: 'Thanh toán khi nhận hàng', icon: '📦' },
                  ].map((method) => (
                    <div
                      key={method.name}
                      className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors"
                    >
                      <span className="text-xl mr-3">{method.icon}</span>
                      <span className="text-gray-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}