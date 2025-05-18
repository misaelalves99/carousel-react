// src/components/ProductList.tsx

import React from "react";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products.length) {
    return <p className={styles.noProductsMessage}>Nenhum produto encontrado.</p>;
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
