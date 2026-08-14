import { motion } from "framer-motion";
import { Globe, Play, Share2, Star } from "lucide-react";

const trainers = [
  {
    name: "Arnold Bennett",
    specialty: "Strength & Conditioning",
    experience: "10+ Years Experience",
    certifications: "CSCS, NASM CPT",
    image: "https://media.gettyimages.com/id/83149175/photo/los-angeles-body-builder-actor-and-future-governor-of-california-arnold-schwarzenegger-poses.jpg?s=612x612&w=0&k=20&c=SL1sXvX4CswZU-yqxBNnlifagWnSs2tCcsZSebzdp7E=",
  },
  {
    name: "Brue lee",
    specialty: "Mobility & Performance",
    experience: "8+ Years Experience",
    certifications: "FMS, Precision Nutrition",
    image: "https://media.gettyimages.com/id/143429172/photo/actor-and-martial-artist-bruce-lee-in-a-publicity-still-for-fist-of-fury-aka-the-chinese.jpg?s=612x612&w=0&k=20&c=EYWzlhyKGbXZo1SAXx-1vvcO2OfwzJ5EMg0oKK-5N3Y=",
  },
  {
    name: "Mike Tyson",
    specialty: "HIIT & Athletic Conditioning",
    experience: "9+ Years Experience",
    certifications: "NSCA, TRX",
    image: "https://thumbs.dreamstime.com/b/mike-tyson-23833294.jpg",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Elite Trainers</h2>
      <p className="mt-3 text-[var(--muted)]">Work with coaches trusted by athletes and high performers.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {trainers.map((trainer) => (
          <motion.article
            key={trainer.name}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
          >
            <div className="overflow-hidden">
              <img src={trainer.image} alt={`${trainer.name} professional trainer profile`} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-xl font-semibold text-[var(--text)]">{trainer.name}</h3>
              <p className="text-sm text-[var(--accent)]">{trainer.specialty}</p>
              <p className="text-sm text-[var(--muted)]">{trainer.experience}</p>
              <p className="text-sm text-[var(--muted)]">{trainer.certifications}</p>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <a href="#contact" className="text-sm font-semibold text-[var(--accent)]">
                  View Trainer
                </a>
                <div className="flex gap-3 opacity-0 transition group-hover:opacity-100">
                  <Globe size={16} />
                  <Share2 size={16} />
                  <Play size={16} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
