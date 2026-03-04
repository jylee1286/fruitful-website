interface StepCardProps {
  number: string;
  title: string;
  description: string;
  color: "pink" | "green" | "warm";
  delay: number;
}

export function StepCard({ number, title, description, color, delay }: StepCardProps) {
  const accents = {
    pink: {
      border: "border-[#FF6B9D]/15 hover:border-[#FF6B9D]/30",
      number: "text-[#FF6B9D]",
      line: "bg-[#FF6B9D]",
    },
    green: {
      border: "border-[#4ADE80]/15 hover:border-[#4ADE80]/30",
      number: "text-[#4ADE80]",
      line: "bg-[#4ADE80]",
    },
    warm: {
      border: "border-[#FF8FAE]/15 hover:border-[#FF8FAE]/30",
      number: "text-[#FF8FAE]",
      line: "bg-gradient-to-r from-[#FF6B9D] to-[#4ADE80]",
    },
  };

  const a = accents[color];

  return (
    <div className={`reveal delay-${delay} group`}>
      <div className={`glass-card rounded-2xl p-6 sm:p-8 border ${a.border} transition-all duration-500 hover:-translate-y-1`}>
        {/* Number + line */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-2xl font-extrabold font-[family-name:var(--font-heading)] ${a.number} opacity-60`}>
            {number}
          </span>
          <div className={`flex-1 h-px ${a.line} opacity-20`} />
        </div>

        <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2">{title}</h3>
        <p className="text-sm text-[#999] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
