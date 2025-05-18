// src/pages/ProductsPage.tsx

import React, { useEffect, useState } from "react";
import { Product } from "../types/product"; // Ajuste o caminho conforme necessário
import { getProducts } from "../lib/api/products"; // Ajuste o caminho conforme necessário
import { useProduct } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import styles from "./ProductsPage.module.css"; // Ajuste o caminho conforme necessário

const ProductsPage: React.FC = () => {
  const { setProducts: setContextProducts } = useProduct(); // Aqui o setProducts vem do contexto
  const [products, setProducts] = useState<Product[]>([]); // Este estado é local ao componente
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const fetched = await getProducts();
        setProducts(fetched); // Atualiza o estado local
        setContextProducts(fetched); // Atualiza o contexto global com os produtos
      } catch (err) {
        setError("Erro ao carregar os produtos.");
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [setContextProducts]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Produtos</h1>

      {loading && <p className={styles.loadingMessage}>Carregando...</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p className={styles.noProductsText}>Nenhum produto encontrado.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <ProductList products={products} /> // Passa os produtos para o componente ProductList
      )}
    </div>
  );
};

export default ProductsPage;
