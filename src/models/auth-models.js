const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  email: { type: String, required: true }
}, { 
  collection: 'users' 
});

module.exports = mongoose.model('User', scoreSchema);