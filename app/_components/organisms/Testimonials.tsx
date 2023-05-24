import React from "react";
import styles from "./testimonials.module.scss";
import Image from "next/image";
import testimonials1 from "@/public/images/testimonials1.webp";

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h1>What Our Customers Say</h1>
      <p>We Always Hear Customer&apos;s Voice</p>
      <div>
        <blockquote>
          <q>
            “This is just a perfect cocktail. It is{" "}
            <strong>extremely spirit forward</strong>, but is exceptionally well
            balanced.”
          </q>

          <cite>
            <p>&mdash; Bourbon Sippers</p>
            <address>Sidecar Bar, Gainesville, FL</address>
          </cite>
        </blockquote>
        <figure>
          <Image src={testimonials1} alt="a man tasting tokki soju" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
