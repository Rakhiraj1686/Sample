import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './src/config/db.js';
import enquiryRouter from './src/routes/enquiryRouter.js';
import productRouter from './src/routes/productRouter.js';
import storeRouter from './src/routes/storeRouter.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Database / Storage connection
connectDB();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    store: 'Retail Deal Mobile Electronics',
    location: 'Bicholi Mardana, Indore',
    architecture: 'Standard MERN MVC Architecture',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/enquiries', enquiryRouter);
app.use('/api/products', productRouter);
app.use('/api/store-info', storeRouter);

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Retail Deal Backend Server listening on http://localhost:${PORT}`);
});
