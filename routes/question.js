var Question = require('../models/Question');

module.exports = {
  index: function(req, res){
    Question.getQuestions(req.params.limit != undefined ? req.limit : 50, function(questions){
      res.json({
        data: questions
      });
    });
  },
  show: function(req, res){
    Question.getQuestionById(req.params.id, function(question){
      res.json({data: question});
    });
  },
  answer: function(req, res){
    Question.getAnswer(req.params.id, function(answer){
      res.send(answer);
    });
  },
  create: function(req, res){
    var question = new Question({
      text: req.body.text,
      desc: req.body.desc,
      q_options: req.body.q_options,
      _typeId: req.body.type,
      tags: req.body.tags,
      answer: req.body.answer
    });

    question.save(function(err){
      if(err)
        res.send(err);

      res.json({message: "Added Question!", data: question});
    });
  },
  edit: function(req, res){
    Question.findById(req.params.id, function(err, question){
      if(err)
        res.send(err);

      question.last_updated = new Date();
      question.text = req.body.text;
      question.q_options = req.body.q_options;
      question.desc = req.body.desc;
      question.tags = req.body.tags;
      question.answer = req.body.answer;


      question.save(function(err){
        if(err)
          res.send(err);

        res.json(question);
      });

    });
  },
  delete: function(req, res){
    Question.findByIdAndRemove(req.params.id, function(err){
      if(err)
        res.send(err);

      res.json({message: "Removed Question"});
    })
  }
}
