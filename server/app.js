import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import uploadRoutes from './routes/upload.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import notificationRoutes from './routes/notification.js'
import saleRoutes from './routes/sale.js'
import taskRoutes from './routes/task.js'
import eventRoutes from './routes/event.js'
import approvalRoutes from './routes/approval.js'
import leadRoutes from './routes/lead.js'
import followUpRoutes from './routes/followUp.js'
import cashbookRoutes from './routes/cashbook.js'
import refundRoutes from './routes/refund.js'
import voucherRoutes from './routes/voucher.js'
import deductionRoutes from './routes/deduction.js'
import transcriptRoutes from './routes/transcript.js'
import projectRoutes from './routes/project.js'
import societyRoutes from './routes/society.js'
import inventoryRoutes from './routes/inventory.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

// serving static files | images
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/uploads', express.static(join(__dirname, 'uploads')));

app.use('/api/v1', uploadRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/notification', notificationRoutes)
app.use('/api/v1/task', taskRoutes)
app.use('/api/v1/event', eventRoutes)
app.use('/api/v1/approval', approvalRoutes)
app.use('/api/v1/sale', saleRoutes)
app.use('/api/v1/lead', leadRoutes)
app.use('/api/v1/project', projectRoutes)
app.use('/api/v1/society', societyRoutes)
app.use('/api/v1/inventory', inventoryRoutes)
app.use('/api/v1/followUp', followUpRoutes)
app.use('/api/v1/cashbook', cashbookRoutes)
app.use('/api/v1/refund', refundRoutes)
app.use('/api/v1/voucher', voucherRoutes)
app.use('/api/v1/deduction', deductionRoutes)
app.use('/api/v1/trasncript', transcriptRoutes)
 
app.use((err, req, res, next) => {
    const message = err.message || 'Something went wrong.'
    const status = err.status || 500
    res.status(status).json({ message, status, stack: err.stack })
    next()
})

// MongoDB connection
const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        console.log('Attempting to connect with URI:', uri);

        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

// Rest of server code...