import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
import {connectDB} from './config/db.js';
connectDB();

import authRoutes from './routers/authRoutes.js';
import StudyPlanRoutes from './routers/studyPlanRoutes.js';

const app=express();
app.use(cors({"orgin": "*"}));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api',StudyPlanRoutes);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

//schema->controller->route->postman
//git--local->server->root