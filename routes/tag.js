var Tag = require('../models/Tag');

module.exports = {
  index: function(req, res){
    Tag.find().limit(req.params.limit != undefined ? req.params.limit : 50).exec(function(err, tags){

      if(err)
        res.send(err);

      res.json({
        data: tags
      });
    });
  },
  show: function(req, res){
    Tag.findById(req.params.id, function(err, tag){
      if(err)
        res.send(err);

      res.json({data: tag});
    });
  },
  create: function(req, res){
    var tag = new Tag({
      text: req.body.text,
      desc: req.body.desc
    });

    tag.save(function(err){
      if(err)
        res.send(err);

      res.json({message: "Added Tag!", data: tag});
    });
  },
  edit: function(req, res){
    Tag.findById(req.params.id, function(err, tag){
      if(err)
        res.send(err);

      tag.last_updated = new Date();
      tag.name = req.body.name;
      tag.desc = req.body.desc;

      tag.save(function(err){
        if(err)
          res.send(err);

        res.json({data: tag});
      });

    });
  },
  delete: function(req, res){
    Tag.findByIdAndRemove(req.params.id, function(err){
      if(err)
        res.send(err);

      res.json({message: "Removed Tag"});
    })
  }
}
