import Image from "next/image";
import styles from "./hero.module.scss";
import hero from "@/public/images/hero.jpg";
import Button from "./atoms/Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1>
          Experience
          <br />
          Korean Traditional Spirits
          <br />
          by Master Distiller
        </h1>
        <p>
          Our goal is to make soju an internationally respected spirits category
          by staying true to Korean tradition while incorporating global
          distilling standards.
        </p>

        <a href="#">
          <Button label="Subscribe Now" />
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
