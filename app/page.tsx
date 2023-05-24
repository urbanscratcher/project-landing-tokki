import styles from "./page.module.scss";

import About from "./_components/organisms/About";
import Awards from "./_components/organisms/Awards";
import Cta from "./_components/organisms/Cta";
import Faqs from "./_components/organisms/Faqs";
import Focus from "./_components/organisms/Focus";
import Gallery from "./_components/organisms/Gallery";
import Hero from "./_components/organisms/Hero";
import Intro from "./_components/organisms/Intro";
import Products from "./_components/organisms/Products";
import Testimonials from "./_components/organisms/Testimonials";

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Intro />
      <Products />
      <Awards />
      <Testimonials />
      <Gallery />
      <About />
      <Focus />
      <Faqs />
      <Cta />
    </main>
  );
}
