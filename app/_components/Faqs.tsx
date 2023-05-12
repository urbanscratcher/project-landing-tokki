import React from "react";
import styles from "./faqs.module.scss";
import { IoIosArrowForward } from "react-icons/io";

const Faqs = () => {
  return (
    <section className={styles.faqs}>
      <header>
        <h1>Frequently Asked Questions</h1>
        <p>If you have more questions, contact or DM us!</p>
      </header>
      <ul>
        <li>
          <p>how soon will my order ship?</p>
          <figure>
            <IoIosArrowForward />
          </figure>
        </li>
        <li>
          <p>how soon will my order ship?</p>
          <figure>
            <IoIosArrowForward />
          </figure>
        </li>
        <li>
          <p>how soon will my order ship?</p>
          <figure>
            <IoIosArrowForward />
          </figure>
        </li>
        <li>
          <p>how soon will my order ship?</p>
          <figure>
            <IoIosArrowForward />
          </figure>
        </li>
        <li>
          <p>how soon will my order ship?</p>
          <figure>
            <IoIosArrowForward />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Faqs;
