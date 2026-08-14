import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const plans = [
  { name: "STARTER", monthly: 999, cta: "Get Started", features: ["Gym access", "Basic equipment", "Locker access", "Mobile workout tracking"] },
  {
    name: "PRO",
    monthly: 1999,
    cta: "Get Started",
    popular: true,
    features: ["Unlimited gym access", "Group classes", "Workout plans", "Progress tracking", "Trainer consultation"],
  },
  {
    name: "ELITE",
    monthly: 3999,
    cta: "Go Elite",
    features: ["Everything in Pro", "Personal trainer", "Nutrition guidance", "Advanced analytics", "Priority booking"],
  },
];

export default function Membership() {
  const [yearly, setYearly] = useState(false);

  const computedPlans = useMemo(
    () =>
      plans.map((plan) => {
        const annual = plan.monthly * 12;
        const discountedAnnual = Math.round(annual * 0.82);
        return { ...plan, price: yearly ? discountedAnnual : plan.monthly, savings: annual - discountedAnnual };
      }),
    [yearly]
  );

  return (
    <section id="membership" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Choose Your Level.</h2>
          <p className="mt-3 text-[var(--muted)]">Flexible plans that scale with your ambition.</p>
        </div>
        <div className="inline-flex rounded-full border border-[var(--border)] p-1 text-sm">
          <button onClick={() => setYearly(false)} className={`rounded-full px-4 py-2 ${!yearly ? "bg-[var(--accent)] text-black" : "text-[var(--muted)]"}`}>
            Monthly
          </button>
          <button onClick={() => setYearly(true)} className={`rounded-full px-4 py-2 ${yearly ? "bg-[var(--accent)] text-black" : "text-[var(--muted)]"}`}>
            Yearly
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {computedPlans.map((plan, idx) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`relative border p-6 ${plan.popular ? "border-[var(--accent)]" : "border-[var(--border)]"}`}
          >
            {plan.popular && (
              <span className="absolute right-4 top-4 bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-black">MOST POPULAR</span>
            )}
            <h3 className="text-xl font-bold text-[var(--text)]">{plan.name}</h3>
            <p className="mt-4 text-4xl font-black text-[var(--text)]">
              {yearly ? `₹${plan.price}/year` : `₹${plan.price}/month`}
            </p>
            {yearly && <p className="mt-1 text-sm text-[var(--accent)]">Save ₹{plan.savings} yearly</p>}
            <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
              {plan.features.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 block w-full border border-[var(--border)] px-4 py-3 text-center font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {plan.cta}
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
