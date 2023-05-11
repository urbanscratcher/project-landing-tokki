"use client";

import Image, { StaticImageData } from "next/image";
import "./products-item.scss";
import classNames from "classnames";
import Button from "../atoms/Button";
import { FiArrowUpRight as ArrowIcon } from "react-icons/fi";

interface ProductsItemProps {
  imageSrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
  isReversed: boolean;
  clickHandler?: any;
}

const ProductsItem = ({
  imageSrc,
  alt,
  title,
  description,
  isReversed,
  clickHandler,
}: ProductsItemProps) => {
  return (
    <li
      className={classNames(
        "products-item",
        `${isReversed ? "products-item-reversed" : ""}`
      )}
    >
      <figure>
        <Image src={imageSrc} alt={alt} sizes={"100vh"} className="image" />
      </figure>
      <div className="left">
        <h2>{title}</h2>
        <p>{description}</p>
        <a>
          <Button
            label={
              <span>
                Detail &nbsp;
                <ArrowIcon />
              </span>
            }
            outline={true}
            onClick={clickHandler}
          />
        </a>
      </div>
    </li>
  );
};

export default ProductsItem;
