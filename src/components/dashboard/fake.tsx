import { CartCourse, Category, InfoFeatureCard, Instructor, StatProp } from '@/lib/types/cart.types'
import {
  Users,
  Trophy,
  Award,
  CheckCircle,
  TrendingUp,
  PlayCircle,
} from 'lucide-react'


// Mock data - Thay thế bằng API calls thực tế
export const featuredCourses: CartCourse[] = [
  {
    id: 1,
    title: "Lập trình JavaScript từ Zero đến Hero",
    instructor: "Nguyễn Văn A",
    price: 699000,
    originalPrice: 999000,
    rating: 4.8,
    totalStudents: 1250,
    duration: "45 giờ",
    category: "Lập trình",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: true,
    badges: ["Hot", "Mới"]
  },
  {
    id: 2,
    title: "Thiết kế UI/UX với Figma chuyên nghiệp",
    instructor: "Trần Thị B",
    price: 599000,
    originalPrice: 799000,
    rating: 4.9,
    totalStudents: 890,
    duration: "32 giờ",
    category: "Thiết kế",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: true,
    badges: ["Bestseller"]
  },
  {
    id: 3,
    title: "Digital Marketing cho người mới bắt đầu",
    instructor: "Lê Văn C",
    price: 499000,
    originalPrice: 699000,
    rating: 4.7,
    totalStudents: 2100,
    duration: "28 giờ",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: true,
    badges: ["Trending"]
  },
  {
    id: 4,
    title: "Python cho Data Science và AI",
    instructor: "Phạm Thị D",
    price: 899000,
    originalPrice: 1199000,
    rating: 4.9,
    totalStudents: 1560,
    duration: "56 giờ",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: false,
    badges: ["Nâng cao"]
  },
  {
    id: 5,
    title: "React Native - Xây dựng ứng dụng di động",
    instructor: "Hoàng Văn E",
    price: 799000,
    originalPrice: 999000,
    rating: 4.6,
    totalStudents: 950,
    duration: "40 giờ",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: false,
    badges: ["Thực hành"]
  },
  {
    id: 6,
    title: "Quản lý tài chính cá nhân thông minh",
    instructor: "Vũ Thị F",
    price: 299000,
    originalPrice: 499000,
    rating: 4.5,
    totalStudents: 3200,
    duration: "18 giờ",
    category: "Tài chính",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    isFeatured: false,
    badges: ["Cơ bản"]
  }
]

export const categories: Category[] = [
  { id: 'all', name: 'Tất cả', icon: '📚', color: 'bg-blue-100 text-blue-800' },
  { id: 'programming', name: 'Lập trình', icon: '💻', color: 'bg-purple-100 text-purple-800' },
  { id: 'design', name: 'Thiết kế', icon: '🎨', color: 'bg-pink-100 text-pink-800' },
  { id: 'business', name: 'Kinh doanh', icon: '📈', color: 'bg-green-100 text-green-800' },
  { id: 'marketing', name: 'Marketing', icon: '📢', color: 'bg-orange-100 text-orange-800' },
  { id: 'data-science', name: 'Data Science', icon: '📊', color: 'bg-indigo-100 text-indigo-800' },
  { id: 'language', name: 'Ngoại ngữ', icon: '🌐', color: 'bg-yellow-100 text-yellow-800' },
  { id: 'personal', name: 'Phát triển cá nhân', icon: '🚀', color: 'bg-red-100 text-red-800' }
]

export const featuredInstructors: Instructor[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    title: "Senior Full-stack Developer",
    specialization: "JavaScript, React, Node.js",
    students: 5000,
    courses: 12,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Trần Thị B",
    title: "UI/UX Design Lead",
    specialization: "Figma, Adobe XD, User Research",
    students: 3200,
    courses: 8,
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Lê Văn C",
    title: "Digital Marketing Expert",
    specialization: "SEO, Content Marketing, Analytics",
    students: 7800,
    courses: 15,
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Phạm Thị D",
    title: "Data Scientist",
    specialization: "Python, Machine Learning, AI",
    students: 4100,
    courses: 10,
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
]

export const stats: StatProp[] = [
  { icon: <Users className='h-5 w-5 md:h-6 md:w-6 text-blue-300' />, value: "50,000+", label: "Học viên", color: "blue" },
  { icon: <Trophy className='h-5 w-5 md:h-6 md:w-6 text-green-300' />, value: "1,200+", label: "Khóa học", color: "green" },
  { icon: <Award className='h-5 w-5 md:h-6 md:w-6 text-purple-300' />, value: "200+", label: "Giảng viên", color: "purple" },
  { icon: <CheckCircle className='h-5 w-5 md:h-6 md:w-6 text-orange-300' />, value: "98%", label: "Hài lòng", color: "orange" }
]

export const infoFeatureCards: StatProp[] = [
  {
    color: 'green',
    icon: <TrendingUp className="h-6 w-6" />,
    label: "Học theo lộ trình",
    value: "Lộ trình học tập cá nhân hóa, phù hợp với mục tiêu của bạn"
  },
  {
    color: "blue",
    icon: <PlayCircle className="h-6 w-6" />,
    label: "Học mọi lúc mọi nơi",
    value: "Truy cập khóa học 24/7 trên mọi thiết bị"
  },
  {
    color: 'purple',
    icon: <Award className="h-6 w-6" />,
    label: "Chứng chỉ được công nhận",
    value: "Nhận chứng chỉ hoàn thành có giá trị"
  },
  {
    color: 'yellow',
    icon: <Users className="h-6 w-6" />,
    label: "Cộng đồng hỗ trợ",
    value: "Thảo luận và nhận hỗ trợ từ giảng viên & học viên"
  }
]