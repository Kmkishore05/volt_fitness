import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const scheduleData: Record<string, Array<{ time: string; workout: string; trainer: string; duration: string; difficulty: string; seats: string }>> = {
  Monday: [
    { time: "06:00 AM", workout: "Strength Training", trainer: "Coach Alex", duration: "45 min", difficulty: "Intermediate", seats: "18 / 25" },
    { time: "07:00 PM", workout: "HIIT Blast", trainer: "Coach Ryan", duration: "40 min", difficulty: "Advanced", seats: "12 / 20" },
  ],
  Tuesday: [{ time: "06:30 AM", workout: "Mobility Flow", trainer: "Coach Maya", duration: "35 min", difficulty: "All levels", seats: "20 / 25" }],
  Wednesday: [{ time: "05:45 PM", workout: "Functional Circuit", trainer: "Coach Ryan", duration: "50 min", difficulty: "Intermediate", seats: "15 / 22" }],
  Thursday: [{ time: "07:00 AM", workout: "Core & Stability", trainer: "Coach Maya", duration: "40 min", difficulty: "Beginner", seats: "22 / 24" }],
  Friday: [{ time: "06:00 PM", workout: "Power Lifting", trainer: "Coach Alex", duration: "55 min", difficulty: "Advanced", seats: "9 / 16" }],
  Saturday: [{ time: "09:00 AM", workout: "Endurance Bootcamp", trainer: "Coach Ryan", duration: "60 min", difficulty: "Intermediate", seats: "16 / 24" }],
  Sunday: [{ time: "08:00 AM", workout: "Recovery Mobility", trainer: "Coach Maya", duration: "30 min", difficulty: "All levels", seats: "24 / 28" }],
};

export default function WorkoutSchedule() {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <section id="schedule" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Workout Schedule</h2>
      <p className="mt-3 text-[var(--muted)]">Reserve classes, stay accountable and keep your week structured.</p>
      <div className="mt-8 flex gap-2 overflow-auto pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`whitespace-nowrap border px-4 py-2 text-sm ${activeDay === day ? "border-[var(--accent)] text-[var(--accent)]" : "border-[var(--border)] text-[var(--muted)]"}`}
          >
            {day}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="mt-6 grid gap-4"
        >
          {scheduleData[activeDay].map((session) => (
            <article key={`${activeDay}-${session.time}`} className="grid gap-3 border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-6 md:items-center">
              <p className="font-semibold text-[var(--text)]">{session.time}</p>
              <p className="text-[var(--text)]">{session.workout}</p>
              <p className="text-sm text-[var(--muted)]">{session.duration}</p>
              <p className="text-sm text-[var(--muted)]">{session.trainer}</p>
              <p className="text-sm text-[var(--muted)]">{session.seats} spots</p>
              <a href="#contact" className="border border-[var(--border)] px-3 py-2 text-center text-sm font-semibold hover:border-[var(--accent)]">
                Book Class
              </a>
            </article>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
