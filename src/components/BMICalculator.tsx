import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function getCategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", suggestion: "Prioritize strength training and nutrient-dense meals." };
  if (bmi < 25) return { label: "Normal", suggestion: "Maintain balance with consistent training and recovery." };
  if (bmi < 30) return { label: "Overweight", suggestion: "Add cardio intervals and controlled calorie intake." };
  return { label: "Obesity", suggestion: "Follow supervised training and progressive nutrition coaching." };
}

export default function BMICalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(74);
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState("male");

  const result = useMemo(() => {
    const m = height / 100;
    const bmi = weight / (m * m);
    const fixed = Number.isFinite(bmi) ? Number(bmi.toFixed(1)) : 0;
    return { bmi: fixed, ...getCategory(fixed) };
  }, [height, weight, age, gender]);

  const progress = Math.min((result.bmi / 40) * 100, 100);

  return (
    <section id="bmi" className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-2 md:px-8">
      <div>
        <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">BMI Calculator</h2>
        <p className="mt-3 text-[var(--muted)]">Track your baseline and get a general fitness direction.</p>
        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm">
            Height (cm)
            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">
            Weight (kg)
            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">
            Age
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2" />
          </label>
          <label className="block text-sm">
            Gender
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </form>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="border border-[var(--border)] bg-[var(--surface)] p-8"
      >
        <p className="text-sm text-[var(--muted)]">Your BMI</p>
        <p className="mt-1 text-6xl font-black text-[var(--text)]">{result.bmi}</p>
        <p className="mt-2 text-lg font-semibold text-[var(--accent)]">{result.label} Range</p>
        <div className="mt-6 h-3 w-full bg-[var(--border)]">
          <motion.div className="h-full bg-[var(--accent)]" animate={{ width: `${progress}%` }} transition={{ duration: 0.7 }} />
        </div>
        <div className="mt-4 flex justify-between text-xs text-[var(--muted)]">
          <span>18.5</span>
          <span>25</span>
          <span>30+</span>
        </div>
        <p className="mt-6 text-[var(--muted)]">{result.suggestion}</p>
        <p className="mt-6 text-xs text-[var(--muted)]">This calculator provides a general estimate and is not medical advice.</p>
      </motion.div>
    </section>
  );
}
