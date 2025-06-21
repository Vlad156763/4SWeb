import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.get('/api/search', async (req, res) => {
    const { q } = req.query;
    const key = process.env.SERPAPI_KEY;
    if (!q) return res.status(400).json({ error: 'Missing query' });

    const url = `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(q)}&api_key=${key}&google_domain=google.com`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = (data.shopping_results || [])
            .filter(i => typeof i.extracted_price === 'number')
            .sort((a, b) => a.extracted_price - b.extracted_price)
            .slice(0, 10)
            .map(i => ({
                link: i.product_link,
                store: i.source,
                price: i.price
            }));
        res.json(results);
    } catch (e) {
        res.status(500).json({ error: 'Fetch failed' });
    }
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
