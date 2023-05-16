import React from "react";
import styles from "./testimonials.module.scss";
import Image from "next/image";
import testimonials1 from "../../public/images/testimonials1.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h1>What Our Customers Say</h1>
      <p>We Always Hear Customer&apos;s Voice</p>
      <div className={styles.card}>
        <div className={styles["card--quote"]}>
          <blockquote>
            “This is just a perfect cocktail. It is{" "}
            <strong>extremely spirit forward</strong>, but is exceptionally well
            balanced.”
          </blockquote>
          <figcaption>
            <cite>&mdash; Bourbon Sippers</cite>
            <p>Sidecar Bar, Gainesville, FL</p>
          </figcaption>
        </div>
        <figure>
          <Image
            src={testimonials1}
            sizes="100vh"
            alt="two men with tokki soju"
          />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
