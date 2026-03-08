interface SectionHeaderProps {
  tag: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span className="text-teal text-xs font-mono tracking-widest uppercase mb-3 block">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-accent">{title}</h2>
      {/* Accent bar — full-width in centered mode, fixed 48px otherwise */}
      <div
        className={`mt-4 h-0.5 bg-teal rounded-full opacity-60 ${
          centered ? "w-16 mx-auto" : "w-16"
        }`}
      />
    </div>
  );
}
