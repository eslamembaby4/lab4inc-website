import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sectors from '../components/Sectors';
import WhyLab4 from '../components/WhyLab4';
import Team from '../components/Team';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Sectors />
      <WhyLab4 />
      <Team />
      <ContactSection />
      <Footer />
    </div>
  );
}
