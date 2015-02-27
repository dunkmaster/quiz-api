var Category = require('../models/Category');

module.exports = {
  index: function(req, res){
    Category.find(function(err, categories){
      if(err)
        res.send(err);

      res.json({
        data: categories
      });
    });
  },
  show: function(req, res){
    Category.findById(req.params.id, function(err, category){
      if(err)
        res.send(err);

      res.json({data: category});
    });
  },
  create: function(req, res){
    var category = new Category({
      name: req.body.name,
      desc: req.body.desc
    });

    category.save(function(err){
      if(err)
        res.send(err);

      res.json({message: "Added Category!", data: category});
    });
  },
  edit: function(req, res){
    Category.findById(req.params.id, function(err, category){
      if(err)
        res.send(err);

      category.name = req.body.name;
      category.desc = req.body.desc;
      category.last_updated = new Date();

      category.save(function(err){
        if(err)
          res.send(err);

        res.json({data: category});
      });

    });
  },
  delete: function(req, res){
    Category.findByIdAndRemove(req.params.id, function(err){
      if(err)
        res.send(err);

      res.json({message: "Removed Category"});
    })
  }
}
