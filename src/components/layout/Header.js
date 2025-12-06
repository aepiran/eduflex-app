// src/components/layout/Header.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { useAuth } from '@/lib/hooks/useAuth'
import { useCart } from '@/lib/hooks/useCart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user } = useAuth()
  const { cart } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              EduFlex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-primary-600">
              Trang chủ
            </Link>
            <Link href="/courses" className="font-medium text-gray-700 hover:text-primary-600">
              Khóa học
            </Link>
            <Link href="/instructors" className="font-medium text-gray-700 hover:text-primary-600">
              Giảng viên
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-primary-600">
              Về chúng tôi
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search (Desktop) */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
                />
              </div>
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cart.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.items.length}
                </span>
              )}
            </Link>

            {/* User */}
            {user ? (
              <Link href="/dashboard" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <span className="hidden md:inline font-medium text-gray-700">
                  {user.name}
                </span>
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  Đăng nhập
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:opacity-90 font-medium"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 px-4">
            <div className="space-y-4">
              <Link href="/" className="block font-medium text-gray-700 hover:text-primary-600">
                Trang chủ
              </Link>
              <Link href="/courses" className="block font-medium text-gray-700 hover:text-primary-600">
                Khóa học
              </Link>
              <Link href="/instructors" className="block font-medium text-gray-700 hover:text-primary-600">
                Giảng viên
              </Link>
              <Link href="/about" className="block font-medium text-gray-700 hover:text-primary-600">
                Về chúng tôi
              </Link>
              
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}