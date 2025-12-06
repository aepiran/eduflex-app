// src/lib/contexts/AuthContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'student' | 'instructor' | 'admin'
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (userData: any) => Promise<boolean>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkAuth = () => {
      try {
        const savedUser = localStorage.getItem('eduflex_user')
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error('Failed to load user from localStorage:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Mock login - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const mockUser: User = {
        id: '1',
        name: 'Nguyễn Văn A',
        email: email,
        role: 'student'
      }
      
      setUser(mockUser)
      localStorage.setItem('eduflex_user', JSON.stringify(mockUser))
      return true
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('eduflex_user')
  }

  const register = async (userData: any): Promise<boolean> => {
    try {
      // Mock registration - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: 'student'
      }
      
      setUser(newUser)
      localStorage.setItem('eduflex_user', JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error('Registration failed:', error)
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}