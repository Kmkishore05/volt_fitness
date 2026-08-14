import { motion } from "framer-motion";

const overview = [
  ["Current Weight", "72 kg"],
  ["Target Weight", "68 kg"],
  ["Weekly Workouts", "5"],
  ["Calories Burned", "3,240"],
];

const progressCards = [
  ["Strength", "+24%"],
  ["Endurance", "+18%"],
  ["Consistency", "92%"],
];

export default function ProgressDashboard() {
  return (
    <section id="progress" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Progress Dashboard</h2>
      <p className="mt-3 text-[var(--muted)]">Real metrics that keep your training objective and visible.</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overview.map(([label, value]) => (
          <div key={label} className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--muted)]">{label}</p>
            <p className="mt-2 text-2xl font-bold text-[var(--text)]">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--text)]">Weight Progress</h3>
          <svg viewBox="0 0 320 180" className="mt-4 w-full">
            <polyline fill="none" stroke="var(--accent)" strokeWidth="4" points="0,140 60,130 120,120 180,104 240,95 320,80" />
          </svg>
        </motion.div>
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--text)]">Workout Frequency</h3>
          <div className="mt-6 space-y-4">
            {[70, 85, 60, 90].map((n, i) => (
              <div key={i}>
                <div className="mb-1 flex justify-between text-xs text-[var(--muted)]">
                  <span>Week {i + 1}</span>
                  <span>{n}%</span>
                </div>
                <div className="h-2 bg-[var(--border)]">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${n}%` }} viewport={{ once: true }} className="h-full bg-[var(--accent)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--text)]">Calories Burned</h3>
          <svg viewBox="0 0 320 180" className="mt-4 w-full">
            {[40, 70, 90, 65, 120, 140].map((h, i) => (
              <rect key={i} x={20 + i * 48} y={170 - h} width="30" height={h} fill="var(--accent)" opacity="0.85" />
            ))}
          </svg>
        </div>
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="font-semibold text-[var(--text)]">Strength Progress</h3>
          <svg viewBox="0 0 320 180" className="mt-4 w-full">
            <polyline fill="none" stroke="var(--text)" strokeWidth="4" points="0,150 65,132 130,120 190,95 260,84 320,65" />
          </svg>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {progressCards.map(([label, value]) => (
          <div key={label} className="border border-[var(--border)] px-5 py-4">
            <p className="text-sm text-[var(--muted)]">{label}</p>
            <p className="mt-2 text-2xl font-bold text-[var(--text)]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
