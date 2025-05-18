// src/pages/CarouselPage.tsx

import React from "react";
import Carousel from "../components/Carousel"; // Ajuste o caminho conforme necessário
import styles from "./CarouselPage.module.css"; // Novo import do CSS Module

const CarouselPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Carrossel de Destaques</h1>
      <Carousel />
    </main>
  );
};

export default CarouselPage;
