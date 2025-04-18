import { Router } from 'express';
import Project from '../models/Project.js';
import Skill   from '../models/Skill.js';

const router = Router();

router.get('/', async (req, res) => {
  const [projects, skills] = await Promise.all([
    Project.find(),
    Skill.find()
  ]);
  res.render('admin', { projects, skills });
});

// …and your POST /add‑project, POST /add‑skill, delete routes here…

export default router;
