import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// Cambia el puerto a 3000 para coincidir con el proxy
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta modificada para coincidir con la solicitud del frontend
app.get('/api', (req, res) => {
  res.json({ 
    message: '¡Conexión exitosa desde Astro!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor backend en http://localhost:${PORT}`);
});