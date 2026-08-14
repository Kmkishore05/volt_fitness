export default function Nutrition() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Train Hard. Eat Smart.</h2>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">Nutrition intelligence that supports recovery, performance and body composition goals.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-xl font-semibold text-[var(--text)]">Nutrition Dashboard</h3>
          <div className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Protein Intake</span>
              <span className="text-[var(--text)]">132g / 150g</span>
            </div>
            <div className="h-2 bg-[var(--border)]"><div className="h-full w-[88%] bg-[var(--accent)]" /></div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Hydration</span>
              <span className="text-[var(--text)]">2.4L / 3L</span>
            </div>
            <div className="h-2 bg-[var(--border)]"><div className="h-full w-[80%] bg-[var(--accent)]" /></div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted)]">Macro Balance</span>
              <span className="text-[var(--text)]">40/30/30</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 border border-[var(--border)] bg-[var(--surface)] p-6 text-sm text-[var(--muted)]">
          <p>- Personalized nutrition plans</p>
          <p>- Meal guidance based on training days</p>
          <p>- Protein calculator integration</p>
          <p>- Daily hydration tracking</p>
          <p>- Macro tracking for lean mass and fat loss</p>
        </div>
      </div>
    </section>
  );
}
