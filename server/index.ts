import 'dotenv/config';
import express { Express, Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { callAgent } from './agent';

const app: Express = express();

import cors from 'cors';
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_ATLAS_URI as string);

async function runServer() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to MongoDB Atlas');

    } catch (error) {
        console.error(error);
    }
}