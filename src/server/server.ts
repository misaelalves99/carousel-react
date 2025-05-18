// server.ts - Express.js Backend
import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({ where: { id: Number(id) } });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, description, imageUrl, category } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: { name, price, description, imageUrl, category },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
  }
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, imageUrl, category } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, price, description, imageUrl, category },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id: Number(id) } });
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir produto', error: error.message });
  }
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
