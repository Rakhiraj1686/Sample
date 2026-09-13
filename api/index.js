import express from 'express';
import cors from 'cors';
import { connectDB } from '../backend/src/config/db.js';
import enquiryRouter from '../backend/src/routes/enquiryRouter.js';
import productRouter from '../backend/src/routes/productRouter.js';
import storeRouter from '../backend/src/routes/storeRouter.js';
import { errorHandler } from '../backend/src/middlewares/errorHandler.js';

const app = express();

// Initialize DB/storage
connectDB();

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Base Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    store: 'Retail Deal Mobile Electronics',
    location: 'Bicholi Mardana, Indore',
    architecture: 'Standard MERN MVC Architecture (Vercel Serverless)',
    timestamp: new Date().toISOString()
  });
});

// Mount Routes
app.use('/api/enquiries', enquiryRouter);
app.use('/api/products', productRouter);
app.use('/api/store-info', storeRouter);

// Centralized error handling
app.use(errorHandler);

export default app;
