import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className={styles.footer}>
      <h1>Tokki Soju</h1>
      <nav>
        <ul>
          <li>
            <a href="#intro">Introduction</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#focus">Focus</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a href="#cta">Subscription</a>
          </li>
        </ul>
      </nav>
      <p>
        Site design & Development &#169; {year} Hyunjung Joun. All right
        reserved
      </p>
    </section>
  );
};

export default Footer;
