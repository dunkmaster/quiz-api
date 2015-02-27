var Quiz = require('../models/Quiz');

module.exports = {
  index: function(req, res){
    Quiz.getQuizes(req.params.limit != undefined ? req.limit : 50, function(quizes){
      res.json({
        data: quizes
      });
    });
  },
  show: function(req, res){
    Quiz.findById(req.params.id, function(err, quiz){
      if(err)
        res.send(err);

      res.json({data: question});
    });
  },
  create: function(req, res){
    var quiz = new Quiz({
      name: req.body.name,
      desc: req.body.desc,
      questions: req.body.questions,
      author: req.body.author,
      tags: req.body.tags
    });

    quiz.save(function(err){
      if(err)
        res.send(err);

      res.json({message: "Added Quiz!", data: quiz});
    });
  },
  edit: function(req, res){
    Quiz.update({_id: req.params.id}, function(err, quiz){
      if(err)
        res.send(err);
      quiz.last_updated = new Date();
      quiz.name = req.body.name;
      quiz.desc = req.body.desc;
      quiz.questions = req.body.questions;
      quiz.author = req.body.author;
      quiz.tags = req.body.tags;

      quiz.save(function(err){
        if(err)
          res.send(err);

        res.json({data: quiz});
      });

    });
  },
  delete: function(req, res){
    Quiz.findByIdAndRemove(req.params.id, function(err){
      if(err)
        res.send(err);

      res.json({message: "Removed Quiz"});
    })
  }
}
