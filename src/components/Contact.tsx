import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

type FormState = { name: string; email: string; phone: string; goal: string; message: string };

const initialState: FormState = { name: "", email: "", phone: "", goal: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.goal || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }
    setStatus("Thanks. A VOLT trainer will contact you shortly.");
    setForm(initialState);
  };

  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-2 md:px-8">
      <div>
        <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Contact VOLT FITNESS</h2>
        <p className="mt-3 text-[var(--muted)]">Speak with our team to create your custom training strategy.</p>
        <div className="mt-8 space-y-4 text-sm text-[var(--muted)]">
          <p className="flex items-center gap-2"><MapPin size={16} /> 22 Prime Sports Avenue, Mumbai</p>
          <p className="flex items-center gap-2"><Phone size={16} /> +91 90000 12345</p>
          <p className="flex items-center gap-2"><Mail size={16} /> hello@voltfitness.com</p>
          <p>Opening Hours: Mon-Sat 5:00 AM - 11:00 PM | Sunday 6:00 AM - 9:00 PM</p>
        </div>
      </div>
      <form onSubmit={onSubmit} className="space-y-4 border border-[var(--border)] bg-[var(--surface)] p-6">
        <label className="block text-sm text-[var(--muted)]">
          Name *
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
        </label>
        <label className="block text-sm text-[var(--muted)]">
          Email *
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
        </label>
        <label className="block text-sm text-[var(--muted)]">
          Phone
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
        </label>
        <label className="block text-sm text-[var(--muted)]">
          Fitness Goal *
          <input
            required
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
            className="mt-1 w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
        </label>
        <label className="block text-sm text-[var(--muted)]">
          Message *
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 min-h-28 w-full border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
        </label>
        <button className="w-full bg-[var(--accent)] px-5 py-3 font-semibold text-black">Talk to a Trainer</button>
        {status && <p className="text-sm text-[var(--muted)]">{status}</p>}
      </form>
    </section>
  );
}
