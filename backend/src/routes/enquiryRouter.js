import { Router } from 'express';
import { createEnquiry, getAllEnquiries } from '../controllers/enquiryController.js';
import { validateEnquiry } from '../middlewares/validation.js';

const router = Router();

router.post('/', validateEnquiry, createEnquiry);
router.get('/', getAllEnquiries);

export default router;
