import { Router } from 'express';
const router = Router();

// Homepage (could render Pug or just send text)
router.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

export default router;
