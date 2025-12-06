import { InfoFeatureCard } from "@/lib/types/cart.types";
export default function InfoCard({ feature }: { feature: InfoFeatureCard }) {
    return (
        <div
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <div className="inline-flex p-3 rounded-lg bg-primary-100 text-primary-600 mb-4">
                {feature.icon}
            </div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
        </div>
    );
}