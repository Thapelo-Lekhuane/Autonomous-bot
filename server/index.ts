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

        app.get('/', (req: Request, res: Response) => {
            res.send('LangGraph Agent Server');
        })
        app.post('/chat', async (req: Request, res: Response) => {
            const initialMessage = req.body.message;
            const threadId = Date.now().toString();
            console.log(initialMessage)
            try {
                const response = await callAgent(client, initialMessage, threadId)
                res.json({ threadId, response })
            } catch (error) {
               console.error('Error Starting Conversation:', error)
                res.status(500).json({ error: 'Error Starting Conversation' })
            }
        })
        app.post('/chat/:threadId', async (req: Request, res: Response) => {
        const { threadId } = req.params;
        connt { message } = req.body;  

        try {
            const response = await callAgent(client, message, threadId)
           
        } catch (error) {
            console.error('Error Continuing Conversation:', error)
        }
         









    } catch (error) {
        console.error(error);
    }
}