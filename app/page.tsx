import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import CtaSection from '@/components/sections/cta-section';
import HeroSection from '@/components/sections/hero-section';
import MenuSection from '@/components/sections/menu-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import WhyChooseUs from '@/components/sections/why-choose-us';


const page = () => {
  return (
    <main>
      <HeroSection/>
      <AboutSection/>
      <MenuSection/>
      <WhyChooseUs/>
      <TestimonialsSection/>
       <ContactSection/>
       <CtaSection/>
    </main>
  );
};

export default page;