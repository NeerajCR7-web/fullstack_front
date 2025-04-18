// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  imageUrl:    { type: String, required: true },
  projectUrl:  { type: String, required: true },
});

export default mongoose.model('Project', projectSchema);
