const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
  text: { type: String, required: true },
  expediteur: { type: String, required: true },
  heure: { type: String, required: true },
});

module.exports = mongoose.model('Messages', messagesSchema);