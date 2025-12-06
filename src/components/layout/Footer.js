export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-2xl font-bold">EduFlex</span>
            </div>
            <p className="text-gray-400">
              Nền tảng học trực tuyến hàng đầu Việt Nam với chất lượng quốc tế.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Về EduFlex</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">Giới thiệu</a></li>
              <li><a href="/contact" className="hover:text-white">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="hover:text-white">Câu hỏi thường gặp</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Kết nối</h4>
            <p className="text-gray-400 mb-4">
              Đăng ký nhận thông tin khóa học mới
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 EduFlex. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}