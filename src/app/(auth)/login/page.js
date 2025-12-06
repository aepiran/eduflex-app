// src/app/(auth)/login/page.js
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  Facebook, 
  Github, 
  Chrome,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { useAuth } from '@/lib/hooks/useAuth'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  
  const router = useRouter()
  const { login } = useAuth()

  const validateForm = () => {
    const newErrors = {}
    
    if (!email) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không hợp lệ'
    }
    
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu'
    } else if (password.length < 5) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    setErrors({})
    
    try {
      // Gọi API login
      const success = await login(email, password)
      
      if (success) {
        setShowSuccess(true)
        
        // Hiển thị thông báo thành công và chuyển hướng
        setTimeout(() => {
          router.push('/dashboard')
        }, 1500)
      }
    } catch (error) {
      setErrors({
        submit: error.message || 'Đăng nhập thất bại. Vui lòng thử lại.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Đăng nhập với ${provider}`)
    // Thêm logic xác thực social
  }

  return (
    <div className="min-h-screen flex">
      {/* Cột hình ảnh - Ẩn trên mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-secondary-600 relative">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-12">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold">EduFlex</h1>
                <p className="text-white/80">Học tập thông minh</p>
              </div>
            </Link>
          </div>
          
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6">
              Học tập không giới hạn
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Tham gia cùng hơn 50,000+ học viên đang phát triển kỹ năng với các khóa học chất lượng cao từ chuyên gia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                <span>10,000+ khóa học đa dạng</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                <span>Học mọi lúc, mọi nơi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-300 mr-3" />
                <span>Hỗ trợ 24/7 từ giảng viên</span>
              </div>
            </div>
          </div>
          
          <div className="mt-auto py-8">
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-orange-500"
                  />
                ))}
              </div>
              <div>
                <p className="font-medium">50,000+ học viên tin tưởng</p>
                <p className="text-white/80 text-sm">Đánh giá 4.8/5 từ học viên</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cột đăng nhập */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo mobile */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center space-x-3">
              <div className="bg-primary-600 text-white p-3 rounded-xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">EduFlex</h1>
                <p className="text-gray-600">Học tập thông minh</p>
              </div>
            </Link>
          </div>

          {/* Card đăng nhập */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Chào mừng trở lại
              </h2>
              <p className="text-gray-600 mt-2">
                Đăng nhập để tiếp tục hành trình học tập
              </p>
            </div>

            {/* Thông báo thành công */}
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-800 font-medium">
                    Đăng nhập thành công! Đang chuyển hướng...
                  </span>
                </div>
              </div>
            )}

            {/* Thông báo lỗi */}
            {errors.submit && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-red-800 font-medium">
                    {errors.submit}
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors({ ...errors, email: '' })
                    }}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="you@example.com"
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password field */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (errors.password) setErrors({ ...errors, password: '' })
                    }}
                    className={`block w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="••••••••"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  disabled={isLoading}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Ghi nhớ đăng nhập
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang đăng nhập...
                  </>
                ) : 'Đăng nhập'}
              </button>
            </form>

            {/* Social login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc đăng nhập với
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleSocialLogin('facebook')}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </button>

                <button
                  onClick={() => handleSocialLogin('google')}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <Chrome className="h-5 w-5 text-red-500" />
                </button>

                <button
                  onClick={() => handleSocialLogin('github')}
                  disabled={isLoading}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  <Github className="h-5 w-5 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Đăng ký link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Chưa có tài khoản?{' '}
                <Link 
                  href="/register" 
                  className="font-medium text-primary-600 hover:text-primary-700"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>

            {/* Thông tin bảo mật */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center text-xs text-gray-500 space-x-4">
                <a href="#" className="hover:text-gray-700">Điều khoản sử dụng</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700">Chính sách bảo mật</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-700">Trợ giúp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}