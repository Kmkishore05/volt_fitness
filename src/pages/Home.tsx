import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Programs from "../components/Programs";
import Membership from "../components/Membership";
import BMICalculator from "../components/BMICalculator";
import TransformationSlider from "../components/TransformationSlider";
import Trainers from "../components/Trainers";
import WorkoutSchedule from "../components/WorkoutSchedule";
import ProgressDashboard from "../components/ProgressDashboard";
import ProgressTimeline from "../components/ProgressTimeline";
import Statistics from "../components/Statistics";
import PerformanceStrip from "../components/PerformanceStrip";
import Testimonials from "../components/Testimonials";
import Nutrition from "../components/Nutrition";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

type HomeProps = {
  isDark: boolean;
  onToggleTheme: () => void;
  reducedMotion: boolean;
};

export default function Home({ isDark, onToggleTheme, reducedMotion }: HomeProps) {
  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <main>
        <Hero reducedMotion={reducedMotion} />
        <Philosophy reducedMotion={reducedMotion} />
        <Programs />
        <Membership />
        <BMICalculator />
        <TransformationSlider reducedMotion={reducedMotion} />
        <Trainers />
        <WorkoutSchedule />
        <ProgressDashboard />
        <ProgressTimeline reducedMotion={reducedMotion} />
        <Statistics reducedMotion={reducedMotion} />
        <PerformanceStrip reducedMotion={reducedMotion} />
        <Testimonials />
        <Nutrition />
        <CTA reducedMotion={reducedMotion} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
