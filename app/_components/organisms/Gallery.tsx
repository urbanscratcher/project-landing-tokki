import React from "react";
import styles from "./gallery.module.scss";
import Image from "next/image";
import gallery1 from "@/public/images/gallery-1.jpg";
import gallery2 from "@/public/images/gallery-2.jpg";
import gallery3 from "@/public/images/gallery-3.jpg";
import gallery4 from "@/public/images/gallery-4.jpg";
import gallery5 from "@/public/images/gallery-5.jpg";
import gallery6 from "@/public/images/gallery-6.jpg";
import gallery7 from "@/public/images/gallery-7.jpg";
import gallery8 from "@/public/images/gallery-8.jpg";
import gallery9 from "@/public/images/gallery-9.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallery}>
      <ul>
        <li>
          <Image src={gallery1} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery9} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery6} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery3} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery4} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery8} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery5} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery7} alt="sonbi vodka and gin on the table" />
        </li>
        <li>
          <Image src={gallery2} alt="sonbi vodka and gin on the table" />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
