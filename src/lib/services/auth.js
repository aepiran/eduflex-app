// src/lib/services/auth.js
import baseApi from '../api/base'

export const authService = {
  async login(credentials) {
    const response = await baseApi.post('/auth/login', credentials)
    return response.data
  },

  async register(userData) {
    const response = await baseApi.post('/auth/register', userData)
    return response.data
  },

  async logout() {
    const response = await baseApi.post('/auth/logout')
    return response.data
  },

  async getCurrentUser() {
    const response = await baseApi.get('/client/me')
    return response.data
  },

  async refreshToken(refreshToken) {
    const response = await baseApi.post('/auth/refresh', { refreshToken })
    return response.data
  },

  async forgotPassword(email) {
    const response = await baseApi.post('/auth/forgot-password', { email })
    return response.data
  },

  async resetPassword(token, newPassword) {
    const response = await baseApi.post('/auth/reset-password', {
      token,
      newPassword
    })
    return response.data
  }
}