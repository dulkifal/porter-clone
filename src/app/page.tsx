import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';

/**
 * Home page - Main landing page component that displays the Porter logistics platform
 * Composes all major sections including header, hero, services, features, testimonials, and footer
 */
export default function Home(): React.ReactElement {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}
