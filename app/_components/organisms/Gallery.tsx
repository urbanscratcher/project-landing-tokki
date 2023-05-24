"use client";

import gallery1 from "@/public/images/gallery-1.jpg";
import gallery2 from "@/public/images/gallery-2.jpg";
import gallery3 from "@/public/images/gallery-3.jpg";
import gallery4 from "@/public/images/gallery-4.jpg";
import gallery5 from "@/public/images/gallery-5.jpg";
import gallery6 from "@/public/images/gallery-6.jpg";
import gallery7 from "@/public/images/gallery-7.jpg";
import gallery8 from "@/public/images/gallery-8.jpg";
import gallery9 from "@/public/images/gallery-9.jpg";
import Image from "next/image";
import {
  MdArrowForwardIos as NextIcon,
  MdArrowBackIosNew as PrevIcon,
} from "react-icons/md";
import Button from "../atoms/Button";
import "./gallery.scss";
import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      idx: 0,
      imageSrc: gallery5,
      alt: "nicely decorated tokki sojus",
    },
    {
      idx: 1,
      imageSrc: gallery1,
      alt: "two sonbi sojus on the table",
    },
    {
      idx: 2,
      imageSrc: gallery9,
      alt: "a special edition of tokki soju on the table",
    },
    {
      idx: 3,
      imageSrc: gallery6,
      alt: "a man decorating a glass of soju with lemons",
    },
    {
      idx: 4,
      imageSrc: gallery3,
      alt: "a bottle and a glass of tokki soju on the table",
    },
    {
      idx: 5,
      imageSrc: gallery4,
      alt: "a bottle and a glass of sonbi soju on the table",
    },
    {
      idx: 6,
      imageSrc: gallery8,
      alt: "nicely displayed sojus on the shelf",
    },
    {
      idx: 7,
      imageSrc: gallery7,
      alt: "a bottle and a glass of tokki soju with steaks",
    },
    {
      idx: 8,
      imageSrc: gallery2,
      alt: "four different types of tokki brand",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextHandler = () => {
    const nextSlide = currentSlide + 1;
    return nextSlide > images.length - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(nextSlide);
  };

  const prevHandler = () => {
    const nextSlide = currentSlide - 1;
    return nextSlide < 0
      ? setCurrentSlide(images.length - 1)
      : setCurrentSlide(nextSlide);
  };

  const currentImg = images.find((i) => i.idx === currentSlide);
  const prevImg =
    images.find((i) => i.idx === currentSlide - 1) ??
    images.find((i) => i.idx === images.length - 1);
  const nextImg =
    images.find((i) => i.idx === currentSlide + 1) ??
    images.find((i) => i.idx === 0);

  const goToHandler = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <section id="gallery" className="gallery">
      <div>
        <ol>
          <li>
            <Image src={prevImg!.imageSrc} alt={prevImg!.alt} />
          </li>
          <li>
            <Image src={currentImg!.imageSrc} alt={currentImg!.alt} />
          </li>
          <li>
            <Image src={nextImg!.imageSrc} alt={nextImg!.alt} />
          </li>
          <Button onClick={prevHandler} label={<PrevIcon />} circle noFill />
          <Button onClick={nextHandler} label={<NextIcon />} circle noFill />
        </ol>
      </div>
      <ul>
        {images.map((i) => {
          return (
            <li
              key={i.idx}
              className={i.idx === currentSlide ? "highlighted" : ""}
              onClick={() => goToHandler(i.idx)}
            >
              <div />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
