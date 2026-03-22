import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import opportunityRoutes from './routes/opportunityRoute.js';

connectDB();

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/opportunities', opportunityRoutes);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});