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
import { useState } from "react";
import {
  MdArrowForwardIos as NextIcon,
  MdArrowBackIosNew as PrevIcon,
} from "react-icons/md";
import Button from "../atoms/Button";
import "./gallery.scss";

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

  const goToHandler = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <section id="gallery" className="gallery">
      <div>
        <ol>
          {images.map((i) => (
            <li
              key={i.idx}
              style={
                i.idx === currentSlide
                  ? {
                      transform: `translateX(${
                        130 * (i.idx - currentSlide) - 49
                      }%)`,
                      scale: "100%",
                      boxShadow: `0 3.5rem 4.5rem 0 rgb(133, 124, 110, 0.5)`,
                    }
                  : i.idx > currentSlide
                  ? {
                      transform: `translateX(${
                        130 * (i.idx - currentSlide) - 46
                      }%)`,
                    }
                  : {
                      transform: `translateX(${
                        130 * (i.idx - currentSlide) - 79
                      }%)`,
                    }
              }
              className={i.idx === currentSlide ? "currentGallery" : undefined}
            >
              <Image
                src={i!.imageSrc}
                alt={i!.alt}
                style={
                  i.idx === currentSlide
                    ? undefined
                    : { mixBlendMode: `soft-light`, filter: `blur(0.5rem)` }
                }
              />
            </li>
          ))}
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
