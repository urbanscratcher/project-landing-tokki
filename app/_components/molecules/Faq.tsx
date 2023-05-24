"use client";

import React, { useState } from "react";
import styles from "./faq.module.scss";
import {
  MdOutlineExpandLess as ArrowUpIcon,
  MdOutlineExpandMore as ArrowDownIcon,
} from "react-icons/md";

interface FaqProps {
  question: string;
  answer: string;
}
const Faq = ({ question, answer }: FaqProps) => {
  const [isShown, setIsShown] = useState(false);

  const toggleHandler = () => {
    setIsShown(!isShown);
  };

  return (
    <li onClick={toggleHandler} className={styles.faq}>
      <div>
        <p>{question}</p>
        <span>{isShown ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
      </div>
      <p className={isShown ? "" : "hidden"}>{answer}</p>
    </li>
  );
};

export default Faq;
