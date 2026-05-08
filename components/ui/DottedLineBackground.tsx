type DottedLineBackgroundProps = {
  lineCount?: number;
  className?: string;
};

export default function DottedLineBackground({
  lineCount = 5,
  className = "",
}: DottedLineBackgroundProps) {
  const totalLines = Math.max(1, lineCount);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 hidden w-full items-stretch justify-between sm:flex container mx-auto ${className}`.trim()}
      aria-hidden="true"
    >
      {Array.from({ length: totalLines }).map((_, index) => (
        <div
          key={index}
          className="h-full w-px border-l border-dashed border-white/55 opacity-[0.18] z-0 [border-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.7)_0_7px,transparent_7px_14px)_1] motion-safe:animate-[dotted-line-flow_1.2s_linear_infinite]"
        />
      ))}
    </div>
  );
}
