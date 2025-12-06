import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '@/lib/contexts/CartContext'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduFlex - Học trực tuyến chất lượng cao',
  description: 'Nền tảng học trực tuyến với hơn 10,000+ khóa học từ các chuyên gia hàng đầu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg"  type="image/svg+xml"/>
      </head>
      <body className={inter.className}>
        <CartProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                  success: {
                    style: {
                      background: '#10b981',
                    },
                  },
                  error: {
                    style: {
                      background: '#ef4444',
                    },
                  },
                }}
              />
            </ThemeProvider>
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  )
}