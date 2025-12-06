import { StatProp } from "@/lib/types/cart.types";

export default function CardRank({ icon, color, value, label }: StatProp) {
  return (
    <div
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center mb-2 md:mb-3">
          <div className={`p-2 rounded-lg bg-${color}-100/20 mr-3`}>
            {icon}
          </div>
          <div className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            {value}
          </div>
        </div>
        <div className="text-white/80 text-xs md:text-sm text-center break-words leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
}