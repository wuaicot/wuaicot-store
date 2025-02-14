import pool from '../config/db.js';

export const getAllProducts = async () => {
  const { rows } = await pool.query('SELECT * FROM products');
  return rows;
};

export const getProductById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows[0];
};

// Más funciones CRUD según necesites (create, update, delete)