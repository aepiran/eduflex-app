// src/components/cart/CartSummary.tsx
'use client'

import { useState } from 'react'
import { Tag, Sparkles } from 'lucide-react'
import { useCart } from '@/lib/hooks/useCart'

export default function CartSummary() {
  const [discountCode, setDiscountCode] = useState('')
  const [isApplying, setIsApplying] = useState(false)
  
  const { 
    cart, 
    applyDiscount, 
    removeDiscount, 
    getCartSummary,
    calculateSavings,
    checkout 
  } = useCart()
  
  const summary = getCartSummary()
  const savings = calculateSavings()

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return
    
    setIsApplying(true)
    const success = await applyDiscount(discountCode)
    setIsApplying(false)
    
    if (success) {
      setDiscountCode('')
    }
  }

  const handleCheckout = async () => {
    const result = await checkout()
    if (result.success && result.paymentUrl) {
      // Redirect to payment page
      window.location.href = result.paymentUrl
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-8">
          <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Giỏ hàng trống
          </h3>
          <p className="text-gray-600 mb-4">
            Hãy thêm khóa học để bắt đầu học tập!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Tóm tắt đơn hàng
      </h2>

      {/* Discount Code */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <Tag className="h-5 w-5 text-gray-500 mr-2" />
          <label className="text-sm font-medium text-gray-700">
            Mã giảm giá
          </label>
        </div>
        
        <div className="flex">
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Nhập mã giảm giá"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={cart.discount > 0}
          />
          
          {cart.discount > 0 ? (
            <button
              onClick={removeDiscount}
              className="px-4 py-2 bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors"
            >
              Xóa
            </button>
          ) : (
            <button
              onClick={handleApplyDiscount}
              disabled={isApplying || !discountCode.trim()}
              className="px-4 py-2 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isApplying ? 'Đang áp dụng...' : 'Áp dụng'}
            </button>
          )}
        </div>
        
        {cart.discount > 0 && (
          <div className="mt-2 text-sm text-green-600 font-medium">
            Đã áp dụng mã giảm giá: -{summary.formattedDiscount}
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Tạm tính ({cart.totalItems} sản phẩm)</span>
          <span className="font-medium">{summary.formattedSubtotal}</span>
        </div>
        
        {savings > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Tiết kiệm</span>
            <span className="font-medium text-green-600">
              -{formatPrice(savings)}
            </span>
          </div>
        )}
        
        {cart.discount > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-600">Giảm giá</span>
            <span className="font-medium text-green-600">
              -{summary.formattedDiscount}
            </span>
          </div>
        )}
        
        <div className="border-t pt-3 flex justify-between text-lg font-bold">
          <span>Tổng cộng</span>
          <span className="text-primary-600">{summary.formattedTotal}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={cart.isLoading}
        className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {cart.isLoading ? 'Đang xử lý...' : 'Tiến hành thanh toán'}
      </button>

      {/* Security Notice */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-sm">✓</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Thanh toán an toàn</span> - Thông tin của bạn được bảo vệ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}