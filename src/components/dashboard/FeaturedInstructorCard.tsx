import { Instructor } from '@/lib/types/cart.types'
import {
    Star
} from 'lucide-react'
import Link from 'next/link'

export default function FeaturedInstructorCard({ instructor }: { instructor: Instructor }) {
    return (
        <div
            key={instructor.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
        >
            {/* Instructor Avatar */}
            <div className="relative mx-auto mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div
                        className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100"
                        style={{
                            backgroundImage: `url(${instructor.avatar})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    TOP RATED
                </div>
            </div>

            {/* Instructor Info */}
            <h3 className="font-bold text-xl mb-1">{instructor.name}</h3>
            <p className="text-primary-600 font-medium mb-2">{instructor.title}</p>
            <p className="text-gray-600 text-sm mb-4">{instructor.specialization}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{instructor.students.toLocaleString()}+</div>
                    <div className="text-gray-600 text-sm">Học viên</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{instructor.courses}</div>
                    <div className="text-gray-600 text-sm">Khóa học</div>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(instructor.rating)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                            }`}
                    />
                ))}
                <span className="ml-2 font-bold">{instructor.rating}</span>
            </div>

            <Link
                href={`/instructors/${instructor.id}`}
                className="block w-full py-2.5 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 font-medium transition-colors"
            >
                Xem khóa học
            </Link>
        </div>
    )
}