import type { ReactNode } from "react";

type MetricCardProps = {
  title: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "steady";
  subtitle?: string;
  icon: ReactNode;
};

const trendColors: Record<MetricCardProps["trend"], string> = {
  up: "text-emerald-500",
  down: "text-rose-500",
  steady: "text-neutral-500"
};

const trendIcons: Record<MetricCardProps["trend"], string> = {
  up: "▲",
  down: "▼",
  steady: "■"
};

export function MetricCard({
  title,
  value,
  delta,
  trend,
  subtitle,
  icon
}: MetricCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-scholerium-100 bg-white/80 p-6 shadow-card backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-2xl bg-scholerium-100/70 p-3 text-scholerium-700">
          {icon}
        </div>
        <span className={`text-sm font-semibold ${trendColors[trend]}`}>
          {trendIcons[trend]} {delta}
        </span>
      </div>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-scholerium-500">
          {title}
        </h3>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        {subtitle ? (
          <p className="mt-1 text-sm text-scholerium-500">{subtitle}</p>
        ) : null}
      </div>
    </article>
  );
}
