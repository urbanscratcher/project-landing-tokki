import React from "react";
import styles from "./about.module.scss";
import founder1 from "@/public/images/founder-1.jpg";
import founder2 from "@/public/images/founder-2.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h1>About Team Tokki</h1>
      <p>
        Tokki Soju started in Brooklyn, grew up in South Korea, and will expand
        globally starting in 2023
      </p>
      <ul>
        <li>
          <figure>
            <Image src={founder1} alt="founder brandon hill" sizes="100vw" />
          </figure>
          <figcaption>
            <label>founder & master distiller</label>
            <header>Brandon Hill</header>
            <p>
              With 20 years of experience, Brandon Hill has an extensive
              background in brewing and distilling, securing his first brewery
              job at 19. He worked as the Master Distiller at{" "}
              <strong>Van Brunt Stillhouse</strong> in Brooklyn. Alcohol
              production has run in his family for generations starting with his
              grandfather producing whiskey during the Prohibition era.
            </p>
          </figcaption>
        </li>
        <li>
          <figure>
            <Image src={founder2} alt="founder douglas park" sizes="100vw" />
          </figure>
          <figcaption>
            <label>chief executive officer</label>
            <header>Douglas Park</header>
            <p>
              Douglas Park&apos;s past experiences include working at{" "}
              <strong>McKinsey & Company</strong> and{" "}
              <strong>Samsung Electronics</strong>, focusing on supply chain
              management, product marketing and corporate strategy. He claims
              Excel is one of the greatest inventions of the 21st Century.
            </p>
          </figcaption>
        </li>
      </ul>
    </section>
  );
};

export default About;
