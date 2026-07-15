import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/userRoutes.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())

app.use('/', router)

// Simple health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP", message: "mCart server is alive and kicking!" });
});

// Catch-all route handler
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log("Error while connecting to DB: ", err))

app.listen(PORT, ()=> console.log("Server is running on port 5000"))

