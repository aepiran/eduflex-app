import { Category } from "@/lib/types/cart.types";

export default function CategoryCard({ category, onSelected, isSelected }: { category: Category, onSelected: (id: string) => void, isSelected: boolean }) {
    return (
        <button
            onClick={() => onSelected(category.id)}
            className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-all ${isSelected
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
        >
            <span className="mr-2 text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
        </button>
    );
}