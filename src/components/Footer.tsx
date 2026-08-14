export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-8">
        <div>
          <h2 className="text-lg font-extrabold tracking-[0.2em] text-[var(--text)]">VOLT FITNESS</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">Build Strength. Build Discipline. Build You.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--text)]">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {"Programs,Trainers,Schedule,Membership,Progress,Contact".split(",").map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--text)]">Resources</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {"Fitness Guide,Nutrition,FAQ,Blog".split(",").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[var(--text)]">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {"Privacy Policy,Terms,Disclaimer".split(",").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-5 font-semibold text-[var(--text)]">Social</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {"Instagram,YouTube,Facebook,X".split(",").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
