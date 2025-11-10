import { MetricCard } from "@/components/MetricCard";
import { TrendSparkline } from "@/components/TrendSparkline";
import {
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const growthSparkline = [42, 55, 48, 60, 78, 85, 92];
const retentionSparkline = [88, 86, 89, 90, 91, 93, 94];
const engagementSparkline = [320, 355, 340, 365, 382, 410, 438];

const spotlightCourses = [
  {
    id: "SCH-201",
    title: "Cognitive Architecture Studio",
    mentors: ["Dr. Imani Fields"],
    learners: 84,
    completion: 78
  },
  {
    id: "SCH-118",
    title: "Applied Ethics in AI",
    mentors: ["Prof. Lila North", "Edris Kamali"],
    learners: 112,
    completion: 64
  },
  {
    id: "SCH-305",
    title: "Quantitative Learning Science",
    mentors: ["Dr. Mateo Rivera"],
    learners: 127,
    completion: 88
  }
];

const timeline = [
  {
    time: "08:45",
    title: "Mentor pairing completed",
    detail: "42 learners matched with mentors in Residency Track."
  },
  {
    time: "11:10",
    title: "New cohort launched",
    detail: "Foundational Research sprint now live for 96 learners."
  },
  {
    time: "13:30",
    title: "Scholerium Labs update",
    detail: "Prototype feedback cycle shortened by 1.4 days."
  },
  {
    time: "15:05",
    title: "Scholar retention signal",
    detail: "3 learners flagged for mentor follow-up this week."
  }
];

const knowledgeAreas = [
  {
    name: "Computational Design",
    progress: 82,
    delta: "+4.5%"
  },
  {
    name: "Human-Centered Research",
    progress: 74,
    delta: "+6.1%"
  },
  {
    name: "Systems Strategy",
    progress: 68,
    delta: "+2.8%"
  },
  {
    name: "Ethics & Foresight",
    progress: 58,
    delta: "+7.2%"
  }
];

const leadershipSignals = [
  {
    name: "Mentor Response Time",
    score: "18m",
    change: "+6m faster",
    tone: "positive"
  },
  {
    name: "Peer Review Velocity",
    score: "3.6 days",
    change: "−0.8 days",
    tone: "neutral"
  },
  {
    name: "Scholar Wellbeing Index",
    score: "92%",
    change: "+3%",
    tone: "positive"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-scholerium-50 via-white to-scholerium-100">
      <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-16 pt-12 lg:px-10 xl:px-14">
        <section className="flex flex-col justify-between gap-8 lg:flex-row">
          <header className="flex flex-1 flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-scholerium-500">
              Scholerium Atlas
            </span>
            <h1 className="text-4xl font-bold leading-tight text-scholerium-900 md:text-5xl">
              Integrated intelligence across every scholar journey.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-scholerium-600">
              Monitor program health, learning velocity, and scholar wellbeing
              in a single orchestrated view. Designed for curriculum architects
              and mentor leads who need clarity on what powers progress.
            </p>
          </header>
          <div className="grid w-full max-w-sm grid-cols-2 gap-4 rounded-3xl border border-scholerium-100 bg-white/70 p-6 shadow-card backdrop-blur-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                Active Scholars
              </p>
              <p className="mt-2 text-3xl font-bold text-scholerium-900">
                1,482
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                Networks
              </p>
              <p className="mt-2 text-3xl font-bold text-scholerium-900">38</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                Mentor Pulse
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-500">97%</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                Innovation Labs
              </p>
              <p className="mt-2 text-3xl font-bold text-scholerium-900">12</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-12">
          <div className="grid gap-6 lg:col-span-8">
            <div className="grid gap-6 md:grid-cols-2">
              <MetricCard
                title="Program Expansion"
                value="28 cohorts"
                delta="+12.4%"
                trend="up"
                subtitle="New launches across research & residency tracks."
                icon={<AcademicCapIcon className="h-6 w-6" />}
              />
              <MetricCard
                title="Scholar Engagement"
                value="438 avg. touchpoints"
                delta="+7.1%"
                trend="up"
                subtitle="Interactions per scholar over 30 days."
                icon={<UserGroupIcon className="h-6 w-6" />}
              />
              <MetricCard
                title="Learning Velocity"
                value="4.3 days"
                delta="-0.6d"
                trend="down"
                subtitle="Time to mastery on adaptive modules."
                icon={<ClockIcon className="h-6 w-6" />}
              />
              <MetricCard
                title="Retention Horizon"
                value="94%"
                delta="+3.2%"
                trend="up"
                subtitle="Rolling 90-day scholar retention."
                icon={<ChartBarIcon className="h-6 w-6" />}
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <TrendSparkline
                data={growthSparkline}
                label="Pathway Expansion"
              />
              <TrendSparkline
                data={retentionSparkline}
                label="Retention Resilience"
                accent="#4ecd8b"
              />
            </div>
            <article className="rounded-3xl border border-scholerium-100 bg-white/80 shadow-card backdrop-blur">
              <header className="flex flex-wrap items-center justify-between gap-4 border-b border-scholerium-100 px-6 py-5">
                <div>
                  <h2 className="text-base font-semibold text-scholerium-900">
                    Scholar Spotlight Streams
                  </h2>
                  <p className="text-sm text-scholerium-500">
                    Rapid insight into programs accelerating scholarly outcomes.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-scholerium-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-scholerium-600">
                  Live sync
                </div>
              </header>
              <div className="divide-y divide-scholerium-100">
                {spotlightCourses.map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-scholerium-500">
                        {course.id}
                      </span>
                      <h3 className="text-lg font-semibold text-scholerium-900">
                        {course.title}
                      </h3>
                      <p className="text-sm text-scholerium-500">
                        Mentors: {course.mentors.join(", ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-10">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                          Learners
                        </p>
                        <p className="text-2xl font-bold text-scholerium-900">
                          {course.learners}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                          Completion
                        </p>
                        <div className="relative h-2 w-32 rounded-full bg-scholerium-100">
                          <div
                            className="absolute inset-y-0 left-0 rounded-full bg-scholerium-500"
                            style={{ width: `${course.completion}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-scholerium-700">
                          {course.completion}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="grid gap-6 lg:col-span-4">
            <article className="rounded-3xl border border-scholerium-100 bg-white/80 p-6 shadow-card backdrop-blur">
              <header className="flex items-baseline justify-between">
                <h2 className="text-base font-semibold text-scholerium-900">
                  Leadership Signals
                </h2>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                  24h delta
                </span>
              </header>
              <ul className="mt-5 space-y-4">
                {leadershipSignals.map((signal) => (
                  <li key={signal.name}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-scholerium-900">
                        {signal.name}
                      </p>
                      <span className="text-sm font-semibold text-scholerium-600">
                        {signal.score}
                      </span>
                    </div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                        signal.tone === "positive"
                          ? "text-emerald-500"
                          : signal.tone === "neutral"
                          ? "text-scholerium-500"
                          : "text-rose-500"
                      }`}
                    >
                      {signal.change}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-scholerium-100 bg-white/80 p-6 shadow-card backdrop-blur">
              <header className="flex items-baseline justify-between">
                <h2 className="text-base font-semibold text-scholerium-900">
                  Knowledge Depth Index
                </h2>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-scholerium-500">
                  Weekly shift
                </span>
              </header>
              <ul className="mt-5 space-y-5">
                {knowledgeAreas.map((area) => (
                  <li key={area.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-scholerium-900">
                        {area.name}
                      </p>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                        {area.delta}
                      </span>
                    </div>
                    <div className="relative h-2 rounded-full bg-scholerium-100">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-scholerium-500"
                        style={{ width: `${area.progress}%` }}
                      />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-scholerium-500">
                      Depth: {area.progress}%
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-scholerium-100 bg-white/80 p-6 shadow-card backdrop-blur">
              <header>
                <h2 className="text-base font-semibold text-scholerium-900">
                  Today&apos;s Flow
                </h2>
                <p className="text-sm text-scholerium-500">
                  High-signal events from the mentor-learner ecosystem.
                </p>
              </header>
              <ul className="mt-6 space-y-5">
                {timeline.map((event) => (
                  <li key={event.time} className="flex gap-4">
                    <div className="relative flex flex-col items-center">
                      <span className="rounded-full border border-scholerium-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-scholerium-600">
                        {event.time}
                      </span>
                      <span className="mt-2 h-full w-px flex-1 bg-gradient-to-b from-scholerium-200 via-scholerium-100 to-transparent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-scholerium-900">
                        {event.title}
                      </p>
                      <p className="text-sm text-scholerium-500">
                        {event.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}
