import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { About } from '../sections/homepage/about';
import ContactUs from '../sections/homepage/contact-us';
import { Faq } from '../sections/homepage/faq';
import { Feature } from '../sections/homepage/feature';
import Hero from '../sections/homepage/Hero';

export function Homepage() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <About />
        <Feature />
        <Faq />
        <ContactUs/>
      </main>
      <Footer />
    </>
  );
}
