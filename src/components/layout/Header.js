export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-primary-700">EduFlex</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-primary-600">Trang chủ</a>
            <a href="/courses" className="text-gray-700 hover:text-primary-600">Khóa học</a>
            <a href="/instructors" className="text-gray-700 hover:text-primary-600">Giảng viên</a>
            <a href="/about" className="text-gray-700 hover:text-primary-600">Về chúng tôi</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="/cart" className="p-2 hover:bg-gray-100 rounded-lg">
              Giỏ hàng
            </a>
            <a href="/login" className="btn-primary">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}