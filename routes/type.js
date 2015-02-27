var Type = require('../models/Type');

module.exports = {
  index: function(req, res){

    Type.find().limit(req.params.limit != undefined ? req.params.limit : 50).exec(function(err, types){
      console.log("Hello"+types);
      if(err)
        res.send(err);

      res.json({
        data: types
      });
    });
  },
  show: function(req, res){
    Type.findById(req.params.id, function(err, type){
      if(err)
        res.send(err);

      res.json({data: type});
    });
  },
  create: function(req, res){
    var type = new Type({
      name: req.body.name,
      desc: req.body.desc
    });

    type.save(function(err){
      if(err)
        res.send(err);

      res.json({message: "Added type!", data: type});
    });
  },
  edit: function(req, res){
    Type.findById(req.params.id, function(err, type){
      if(err)
        res.send(err);

      type.name = req.body.name;
      type.desc = req.body.desc;
      type.last_updated = new Date();

      type.save(function(err){
        if(err)
          res.send(err);

        res.json({data: type});
      });

    });
  },
  delete: function(req, res){
    Type.findByIdAndRemove(req.params.id, function(err){
      if(err)
        res.send(err);

      res.json({message: "Removed Type"});
    })
  }
}
