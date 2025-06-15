import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  const sum = Number(a) + Number(b);
  res.json({ result: sum });
});

app.listen(PORT, () => {
  console.log(`REST server running at http://localhost:${PORT}`);
});

