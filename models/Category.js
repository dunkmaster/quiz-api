var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var catSchema = new Schema({
  name:  String,
  desc: String,
  created_at: { type: Date, default: Date.now },
  last_updated: { type: Date, default: Date.now }
});

catSchema.methods.getCategoryByName = function(name, callback){
  var cat = {};
  this.find({name: name}).exec(function(err, res){
    if(!err){
      cat = res;
    }
  });
  callback(cat);
}



module.exports = Category = mongoose.model('categories', catSchema);
