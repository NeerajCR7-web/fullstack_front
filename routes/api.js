import { Router } from 'express';
import Project from '../models/Project.js';
import Skill   from '../models/Skill.js';

const router = Router();

router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get('/skills', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

export default router;
