// src/app/(marketing)/page.tsx
'use client'

import { useState } from 'react'

import {
  Search,
  ChevronRight,
  ArrowRight,
  Zap
} from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'
import { useCart } from '@/lib/hooks/useCart'
import { usePathname } from 'next/navigation'
import { PublicLayout } from '@/components/layout'
import CardRank from '@/components/dashboard/CardRank';
import FeaturedCourseICard from '@/components/dashboard/FeaturedCourseICard';
import FeaturedInstructorCard from '@/components/dashboard/FeaturedInstructorCard';
import InfoFeatureCard from '@/components/dashboard/InfoFeatureCard';
import { categories, featuredCourses, featuredInstructors, infoFeatureCards, stats } from '@/components/dashboard/fake'
import CategoryCard from '@/components/dashboard/CategoryCard'


export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlist, setWishlist] = useState<number[]>([])
  const { user } = useAuth()
  const { cart } = useCart()

  const filteredCourses = selectedCategory === 'all'
    ? featuredCourses
    : featuredCourses.filter(course => course.category.toLowerCase().includes(selectedCategory))

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search logic
  }

  const toggleWishlist = (courseId: number) => {
    setWishlist(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 py-16 md:pt-16 md:pb-24">
          <div className="w-full">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Zap className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Hơn 50,000+ học viên đã tin tưởng</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Học mọi lúc, mọi nơi với{' '}
              <span className="text-yellow-300">EduFlex</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Khám phá 10,000+ khóa học từ các chuyên gia hàng đầu.
              Nâng cao kỹ năng, phát triển sự nghiệp với lộ trình học tập cá nhân hóa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 hidden">
              <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm khóa học, giảng viên..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700"
                  >
                    Tìm kiếm
                  </button>
                </div>
              </form>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Khám phá khóa học
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) =>
                <CardRank
                  key={index}
                  icon={stat.icon}
                  color={stat.color}
                  value={stat.value}
                  label={stat.label}
                />
              )}
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-6.25,32.48-10.27,66.35-25.36,94.92-45.29,21.56-15,45-31.08,66.58-48.28,15.39-11.88,31.58-23.5,48.14-34.34,16.63-10.91,33.87-21.18,51.63-30.65C1154.49,7.11,1201.63,0,1200,0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Khám phá theo danh mục
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chọn lĩnh vực bạn quan tâm và bắt đầu hành trình học tập
            </p>
          </div>

          <div className="flex overflow-x-auto pb-4 space-x-3 scrollbar-hide">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onSelected={setSelectedCategory}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Khóa học nổi bật
              </h2>
              <p className="text-gray-600">
                Các khóa học được học viên đánh giá cao nhất
              </p>
            </div>
            <Link
              href="/courses"
              className="group flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              Xem tất cả
              <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.slice(0, 6).map((course) => (
              <FeaturedCourseICard
                key={course.id}
                course={course}
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
              />
            ))}
          </div>

          {/* View All Courses CTA */}
          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Xem tất cả khóa học
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Giảng viên nổi bật
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Học từ những chuyên gia hàng đầu với nhiều năm kinh nghiệm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredInstructors.map((instructor) => (
              <FeaturedInstructorCard
                key={instructor.id}
                instructor={instructor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EduFlex */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tại sao chọn EduFlex?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trải nghiệm học tập khác biệt mang lại giá trị thực sự
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoFeatureCards.map((feature, index) => (
              <InfoFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Bắt đầu hành trình học tập của bạn ngay hôm nay
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Tham gia cùng 50,000+ học viên đang phát triển kỹ năng với EduFlex
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Đăng ký miễn phí
              </Link>
              <Link
                href="/courses"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Xem khóa học
              </Link>
            </div>
            <p className="mt-6 text-white/80 text-sm">
              Miễn phí đăng ký • Học thử 7 ngày • Hỗ trợ 24/7
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Page() {
  const pathname = usePathname();
  if (pathname === '/') {
    return (
      <PublicLayout>
        <HomePage />
      </PublicLayout>
    );
  }
  return <HomePage />
}