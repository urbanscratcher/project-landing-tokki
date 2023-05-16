import Image from "next/image";
import styles from "./hero.module.scss";
import hero from "@/public/images/hero.jpg";
import Button from "./atoms/Button";
import Social from "./Social";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>
          Taste And Experience Korean <strong>Traditional Spirits</strong> by
          Master Distiller
        </h1>
        <p>
          Our goal is to make soju an internationally respected spirits category
          by staying true to Korean tradition while incorporating global
          distilling standards.
        </p>

        <a href="#cta">
          <Button label="Subscribe Now" primary />
        </a>
      </div>

      <figure>
        <Image
          src={hero}
          alt="a bottle labeled with tokki soju"
          sizes="100vw"
          className={styles.image}
        />
      </figure>
    </section>
  );
};

export default Hero;
