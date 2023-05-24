"use client";

import products1 from "@/public/images/products-1.png";
import products2 from "@/public/images/products-2.png";
import products3 from "@/public/images/products-3.png";
import products4 from "@/public/images/products-4.png";
import products5 from "@/public/images/products-5.png";
import { useCallback } from "react";
import useDetailModal from "../../_hooks/useDetailModal";
import ProductsItem from "../molecules/ProductsItem";
import styles from "./products.module.scss";
import { Target } from "./DetailModal";

const Products = () => {
  const detailModal = useDetailModal();

  const showHandler = useCallback(
    (target: Target) => {
      detailModal.target = target;
      detailModal.onOpen();
    },
    [detailModal]
  );

  return (
    <section id="products" className={styles.products}>
      <h1>Meet Our Products</h1>
      <p>we prepared assorted products for you</p>
      <ul>
        <ProductsItem
          imageSrc={products1}
          alt="Tokki Soju White Label"
          title="Tokki Soju White Label"
          description="Made in the traditional Korean way with modern equipment. No chemicals, additives, or sugars added."
          isReversed={false}
          clickHandler={() => showHandler(Target.WHITE)}
        />
        <ProductsItem
          imageSrc={products2}
          alt="Tokki Soju Black Label"
          title="Tokki Soju Black Label"
          description="A full body spirit that really makes the glutinous rice shine. It has a rich mouthfeel with a clean backbone."
          isReversed={true}
          clickHandler={() => showHandler(Target.BLACK)}
        />
        <ProductsItem
          imageSrc={products3}
          alt="Tokki Soju Gold Label"
          title="Tokki Soju Gold Label"
          description="Smooth and complex, our barrel-aged soju is enjoyed by whiskey-lovers and soju-lovers alike."
          isReversed={false}
          clickHandler={() => showHandler(Target.GOLD)}
        />
        <ProductsItem
          imageSrc={products4}
          alt="Sonbi Vodka"
          title="Sonbi Vodka"
          description="Triple distilled and quadruple filtered for a pure vodka with a hint of glutinous rice. A true vodka-drinker's vodka."
          isReversed={true}
          clickHandler={() => showHandler(Target.VODKA)}
        />
        <ProductsItem
          imageSrc={products5}
          alt="Sonbi Gin"
          title="Sonbi Gin"
          description="Made with a mix of London Dry gin ingredients and Korean ingredients. Distilled in a London dry style."
          isReversed={false}
          clickHandler={() => showHandler(Target.GIN)}
        />
      </ul>
    </section>
  );
};

export default Products;
