import About from "./_components/About";
import Awards from "./_components/Awards";
import Faqs from "./_components/Faqs";
import Focus from "./_components/Focus";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Products from "./_components/Products";
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
    </main>
  );
}
