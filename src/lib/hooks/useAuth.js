import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authService } from '@/lib/services/auth'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      if (token) {
        const userData = await authService.getCurrentUser()
        setUser(userData)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await authService.login({ email, password })
      const { accessToken, refreshToken, user } = response
      
      // Lưu token
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
      
      // Cập nhật user state
      setUser(user)
      
      return true
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Đăng nhập thất bại')
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Xóa token và user
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setUser(null)
      router.push('/login')
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }
}