import mongoose from 'mongoose';

const scoreSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Score: { type: Number, required: true }
}, { 
  collection: 'scores' 
});

export default mongoose.model('Score', scoreSchema);
