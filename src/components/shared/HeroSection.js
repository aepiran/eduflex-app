export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Học mọi lúc, mọi nơi với EduFlex
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Hơn 10,000+ khóa học từ các chuyên gia hàng đầu. 
            Nâng cao kỹ năng, phát triển sự nghiệp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/courses" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-center"
            >
              Khám phá khóa học
            </a>
            <a 
              href="/register" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 text-center"
            >
              Đăng ký ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}