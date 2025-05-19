// app/types/product.ts

export type Product = {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category: string;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;
};
