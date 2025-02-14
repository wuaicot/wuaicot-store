import express from 'express';
import { getAllProducts, getProductById } from '../models/Product.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    product ? res.json(product) : res.status(404).json({ error: 'Producto no encontrado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

export default router;