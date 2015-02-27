var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var type = new Schema({
  name:  String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  last_updated: { type: Date, default: Date.now }
});


module.exports = Type = mongoose.model('types', type);
