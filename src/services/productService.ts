import { Product } from "../types/product";

// URL da sua API backend
const API_URL = 'http://localhost:4000/api/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  return response.json();
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar produto');
  }
  return response.json();
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Erro ao criar produto');
  }
  return response.json();
};

export const updateProduct = async (id: number, product: Partial<Product>): Promise<Product> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar produto');
  }
  return response.json();
};

export const deleteProduct = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao excluir produto');
  }
};
