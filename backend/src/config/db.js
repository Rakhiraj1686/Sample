import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serverless friendly directory for Vercel/AWS Lambda
const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
const DATA_DIR = isVercel ? os.tmpdir() : path.join(__dirname, '..', 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

export const connectDB = async () => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));
    }
    console.log(`📦 Database / Storage connected at: ${ENQUIRIES_FILE}`);
  } catch (error) {
    console.warn('Storage init fallback (using in-memory):', error.message);
  }
};

export const getEnquiriesStoragePath = () => ENQUIRIES_FILE;
