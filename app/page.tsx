import {
  Header,
  HeroHome,
  ProblemStatement,
  Benefits,
  HowItWorks,
  Testimonial,
  FinalCTA,
  Footer,
} from '@/components/home';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroHome />
        <ProblemStatement />
        <Benefits />
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
