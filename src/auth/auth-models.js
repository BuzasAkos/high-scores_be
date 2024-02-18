import mongoose from 'mongoose';

const scoreSchema = mongoose.Schema({
  email: { type: String, required: true }
}, { 
  collection: 'users' 
});

export default mongoose.model('User', scoreSchema);