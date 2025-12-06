// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-2xl font-bold">EduFlex</span>
            </div>
            <p className="text-gray-400 mb-6">
              Nền tảng học trực tuyến hàng đầu Việt Nam với chất lượng quốc tế.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['facebook', 'twitter', 'linkedin', 'youtube'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  {/* Add social icons */}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {[
                { href: '/courses', label: 'Khóa học' },
                { href: '/instructors', label: 'Giảng viên' },
                { href: '/about', label: 'Về chúng tôi' },
                { href: '/contact', label: 'Liên hệ' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hỗ trợ</h4>
            <ul className="space-y-3">
              {[
                { href: '/help', label: 'Trung tâm hỗ trợ' },
                { href: '/faq', label: 'Câu hỏi thường gặp' },
                { href: '/terms', label: 'Điều khoản sử dụng' },
                { href: '/privacy', label: 'Chính sách bảo mật' },
                { href: '/refund', label: 'Chính sách hoàn tiền' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Đăng ký nhận tin</h4>
            <p className="text-gray-400 mb-4">
              Nhận thông tin về khóa học mới và ưu đãi đặc biệt.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:opacity-90"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} EduFlex. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2 text-sm">
            Địa chỉ: 123 Đường ABC, Phường Xuân Phương, TP. Hà Nội | Điện thoại: (028) 1234 5678
          </p>
        </div>
      </div>
    </footer>
  )
}