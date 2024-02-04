const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Score: { type: Number, required: true }
}, { 
  collection: 'scores' 
});

module.exports = mongoose.model('Score', scoreSchema);
