// src/pages/HomePage.tsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import { Product } from "../types/product";
import { getProducts } from "../lib/api/products"; // ✅ Importando a função correta
import styles from "./HomePage.module.css";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  // 06-Hooks + 08-Api - Busca produtos ao montar componente
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  // 05-Formulários e Eventos - Handler de navegação
  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Bem-vindo ao Nosso E-commerce</h1>
        <p className={styles.description}>Explore nossos produtos incríveis!</p>
        <button className={styles.heroButton} onClick={handleNavigate}>
          Ver Produtos
        </button>
      </section>
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
        <ProductList products={products.slice(0, 6)} />
      </section>
    </main>
  );
};

export default HomePage;
