import express from 'express';
import { createFacebookLead } from '../controllers/facebookLeadController.js';

export const router = express.Router();

// Route to handle incoming Facebook leads
router.post('/facebook-leads', createFacebookLead);
