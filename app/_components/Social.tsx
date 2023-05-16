import React from "react";
import styles from "./social.module.scss";
import { BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";

const Social = () => {
  return (
    <aside className={styles.social}>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UC4XGh__pHFXiIyByWca29Cw"
            target="_blank"
          >
            <BsYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/tokkisoju/" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/tokkisoju/" target="_blank">
            <BsInstagram />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Social;
