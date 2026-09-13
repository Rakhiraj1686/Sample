import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

export const connectDB = async () => {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(ENQUIRIES_FILE)) {
      fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify([], null, 2));
    }
    console.log('📦 Database / Local Storage Connected successfully.');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export const getEnquiriesStoragePath = () => ENQUIRIES_FILE;
