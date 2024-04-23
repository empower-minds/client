import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Main from './Main';
import Footer from '../components/footer/Footer';
import Hero from '../sections/homepage/Hero';
import ContactUs from '../sections/homepage/contact-us';

export function Layout() {
  return (
    <>
      <Header/>
      <Main>
        <Hero/>
        <Outlet/>
        <ContactUs/>
      </Main>
      <Footer />
    </>
  );
}
