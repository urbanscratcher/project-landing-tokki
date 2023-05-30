"use client";

import { SyntheticEvent, useEffect, useState } from "react";

import logo from "@/public/images/logo.png";
import classNames from "classnames";
import Image from "next/image";
import { MdMenu as MenuIcon } from "react-icons/md";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [belowNav, setBelowNav] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 700) {
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

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [belowNav]);

  useEffect(() => {
    if (toggle) {
      const ulEl = document.querySelector("nav ul");
      const svgEl = document.querySelector("nav div svg");
      const divEl = document.querySelector("nav div");
      const pathsEl = [...document.querySelectorAll("nav div path")];

      const handleClick = (e: any) => {
        if (
          e.target !== ulEl &&
          e.target !== svgEl &&
          e.target !== divEl &&
          !pathsEl.includes(e.target)
        ) {
          setToggle(!toggle);
        }
      };
      document.addEventListener("click", (e) => handleClick(e));
      return () => {
        window.removeEventListener("click", (e) => handleClick(e));
      };
    }
  }, [toggle]);

  const openHandler = () => {
    console.log("clicked");
    if (!toggle) {
      console.log("toggle assessed: false");
      setToggle(true);
    }
  };

  const realignHandler = () => {
    return belowNav && !toggle
      ? classNames(styles.nav, styles.realign)
      : styles.nav;
  };

  return (
    <nav className={realignHandler()}>
      <div onClick={openHandler} className={styles.mobileIcon}>
        <MenuIcon />
      </div>

      <ul className={toggle ? styles.toggleNav : undefined}>
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
