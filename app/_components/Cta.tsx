"use client";

import React, { useCallback } from "react";
import styles from "./cta.module.scss";
import Button from "./atoms/Button";

const Cta = () => {
  const clickHandler = useCallback((e) => {
    e.preventDefault();
    console.log("clicked");
  }, []);

  return (
    <section className={styles.cta}>
      <header>Subscribe Newsletter</header>
      <p>
        You will be provided with various promotions, discount coupons, and the
        latest news. Please support Tokki Soju and our crews by following us.
      </p>
      <form>
        <input />
        <Button label="Subscribe" onClick={(e) => clickHandler(e)} primary />
      </form>
    </section>
  );
};

export default Cta;
