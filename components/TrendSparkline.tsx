type TrendSparklineProps = {
  data: number[];
  label: string;
  accent?: string;
};

export function TrendSparkline({
  data,
  label,
  accent = "#6a74f5"
}: TrendSparklineProps) {
  if (data.length === 0) {
    return null;
  }

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const normalized = (value - minValue) / range;
      const y = 100 - normalized * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <figure className="rounded-3xl border border-scholerium-100 bg-white/70 p-6 shadow-card backdrop-blur">
      <figcaption className="text-sm font-semibold uppercase tracking-[0.2em] text-scholerium-500">
        {label}
      </figcaption>
      <svg
        viewBox="0 0 100 100"
        className="mt-4 h-32 w-full overflow-visible text-scholerium-500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polyline
          fill="url(#sparklineGradient)"
          stroke="none"
          points={`0,100 ${points} 100,100`}
        />
        <polyline
          fill="none"
          stroke={accent}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </figure>
  );
}
