"use client";

import { useEffect, useState } from "react";

import logo from "@/public/images/logo.png";
import classNames from "classnames";
import Image from "next/image";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [belowNav, setBelowNav] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 82.5) {
        setBelowNav(false);
      }

      if (scrollPosition > 82.5) {
        setBelowNav(true);
      }
    };

    window.addEventListener("scroll", scrollHandler);
  }, [belowNav]);

  return (
    <nav
      className={belowNav ? classNames(styles.nav, styles.realign) : styles.nav}
    >
      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#products">products</a>
        </li>
        <li>
          <a href="#">
            <Image src={logo} alt="Tokki Soju Logo" sizes="125px" />
            <p>TOKKI SOJU</p>
          </a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <a href="#cta">subscribe</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
