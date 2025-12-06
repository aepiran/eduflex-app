import {
    PlayCircle,
    Star,
    Clock,
    Users,
    Heart,
} from 'lucide-react'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils/format';
import { CartCourse } from '@/lib/types/cart.types';


export interface FeaturedCourseICardProps {
    toggleWishlist: (number: number) => void;
    wishlist: number[];
    course: CartCourse;
}

export default function FeaturedCourseICard({ course, toggleWishlist, wishlist }: FeaturedCourseICardProps) {
    return (
        <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
            {/* Course Image */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="relative h-full w-full">
                    <div
                        className="h-full w-full bg-gradient-to-br from-primary-100 to-secondary-100"
                        style={{
                            backgroundImage: `url(${course.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                    {course.badges.map((badge, idx) => (
                        <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${badge === 'Hot'
                                ? 'bg-red-500 text-white'
                                : badge === 'Bestseller'
                                    ? 'bg-yellow-500 text-white'
                                    : 'bg-blue-500 text-white'
                                }`}
                        >
                            {badge}
                        </span>
                    ))}
                </div>

                {/* Wishlist Button */}
                <button
                    onClick={() => toggleWishlist(course.id)}
                    className="absolute top-3 right-3 z-20 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                    <Heart
                        className={`h-5 w-5 ${wishlist.includes(course.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-600'
                            }`}
                    />
                </button>

                {/* Preview Button */}
                <button className="absolute bottom-3 right-3 z-20 flex items-center px-3 py-1.5 bg-black/70 text-white rounded-lg hover:bg-black">
                    <PlayCircle className="h-4 w-4 mr-1" />
                    Xem thử
                </button>
            </div>

            {/* Course Info */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                            {course.category}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="ml-1 font-bold">{course.rating}</span>
                    </div>
                </div>

                <Link href={`/courses/${course.id}`}>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {course.title}
                    </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4">
                    Giảng viên: <span className="font-medium">{course.instructor}</span>
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.totalStudents.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                    </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-primary-600">
                                {formatPrice(course.price)}
                            </span>
                            {course.originalPrice && (
                                <span className="ml-2 text-gray-500 line-through text-sm">
                                    {formatPrice(course.originalPrice)}
                                </span>
                            )}
                        </div>
                    </div>

                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition-colors">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    );
}