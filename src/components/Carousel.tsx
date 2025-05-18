// src/components/Carousel.tsx

import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { Product } from "../types/product";
import { getProducts } from "../lib/api/products"; // <-- Importa o getProducts mockado

const Carousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(); // <-- Usa o getProducts em vez de fetch
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if (products.length === 0) return <div>Carregando...</div>;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageWrapper}>
        <img
          src={products[currentIndex].imageUrl}
          alt={products[currentIndex].name}
          className={styles.image}
        />
        <div className={styles.caption}>{products[currentIndex].name}</div>
      </div>
      <button onClick={prevSlide} className={styles.navButtonLeft}>
        &#8592;
      </button>
      <button onClick={nextSlide} className={styles.navButtonRight}>
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
