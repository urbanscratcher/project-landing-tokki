import awards1 from "@/public/images/awards-1.png";
import awards2 from "@/public/images/awards-2.png";
import awards3 from "@/public/images/awards-3.png";
import awards4 from "@/public/images/awards-4.png";
import awards5 from "@/public/images/awards-5.png";
import awards6 from "@/public/images/awards-6.png";
import awards7 from "@/public/images/awards-7.png";
import styles from "./awards.module.scss";
import Image from "next/image";

const Awards = () => {
  return (
    <section className={styles.awards}>
      <h1>Awarded by</h1>
      <ul>
        <li>
          <Image src={awards1} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards2} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards3} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards4} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards5} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards6} sizes="100vh" alt="abc" />
        </li>
        <li>
          <Image src={awards7} sizes="100vh" alt="abc" />
        </li>
      </ul>
    </section>
  );
};

export default Awards;
