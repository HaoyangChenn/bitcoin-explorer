import express from 'express';
import cors from 'cors';  // Import CORS middleware
import { getBlockHeight } from './bitcoinService';
import { initDb, saveBlockHeight, getLatestBlockHeight } from './database';

const app = express();
const PORT = 3001;

// Use CORS middleware to handle cross-origin requests
app.use(cors());

// Initialize the database
initDb().then(() => {
    console.log('Database initialized');
});

// Periodically fetch the block height from Bitcoin Core and save it to the database
setInterval(async () => {
    const blockHeight = await getBlockHeight();
    await saveBlockHeight(blockHeight);
    console.log(`Saved block height: ${blockHeight}`);
}, 10000); // Execute every 10 seconds

// Create an API endpoint for the frontend to fetch the latest block height
app.get('/api/block-height', async (req, res) => {
    const blockHeight = await getLatestBlockHeight();
    res.json({ blockHeight });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
