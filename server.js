import express from 'express';
import cors    from 'cors';

const app = express();

// 1. Allow *all* origins (for testing)
app.use(cors());

// 2. A dummy endpoint
app.get('/api/projects', (req, res) => {
  res.json([{ id: 1, title: 'Test project' }]);
});

// 3. Start listening
app.listen(7777, () => {
  console.log('Test API listening on http://localhost:7777');
});
