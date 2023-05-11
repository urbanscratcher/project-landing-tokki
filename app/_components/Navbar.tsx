import Image from "next/image";
import logo from "../../public/images/logo.png";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">products</a>
        </li>
        <li className={styles.logo}>
          <a href="#">
            <Image
              src={logo}
              alt="Tokki Soju Logo"
              width={125}
              className={styles["logo__image"]}
            />
            <div className={styles["logo__text"]}>TOKKI SOJU</div>
          </a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">subscribe</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
