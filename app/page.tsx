import About from "./_components/About";
import Awards from "./_components/Awards";
import Cta from "./_components/Cta";
import Faqs from "./_components/Faqs";
import Focus from "./_components/Focus";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Products from "./_components/Products";
import Spec from "./_components/molecules/Spec";
import Testimonials from "./_components/Testimonials";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Intro />
      <Products />
      <Awards />
      <Testimonials />
      <About />
      <Focus />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  );
}
