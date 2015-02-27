var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  questionRoutes = require('./routes/question'),
  categoryRoutes = require('./routes/category'),
  typeRoutes = require('./routes/type'),
  tagRoutes = require('./routes/tag'),
  quizRoutes = require('./routes/quiz');



var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/quiz');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/question', questionRoutes.index);
app.get('/question/:id', questionRoutes.show);
app.get('/question/:id/answer', questionRoutes.answer);
app.put('/question/:id', questionRoutes.edit);
app.delete('/question/:id', questionRoutes.delete);
app.post('/question', questionRoutes.create);

app.get('/quiz', quizRoutes.index);
app.get('/quiz/:id', quizRoutes.show);
app.put('/quiz/:id', quizRoutes.edit);
app.delete('/quiz/:id', quizRoutes.delete);
app.post('/quiz', quizRoutes.create);

app.get('/tag', tagRoutes.index);
app.get('/tag/:id', tagRoutes.show);
app.put('/tag/:id', tagRoutes.edit);
app.delete('/tag/:id', tagRoutes.delete);
app.post('/tag', tagRoutes.create);

app.get('/category', categoryRoutes.index);
app.get('/category/:id', categoryRoutes.show);
app.put('/category/:id', categoryRoutes.edit);
app.delete('/category/:id', categoryRoutes.delete);
app.post('/category', categoryRoutes.create);

app.get('/type', typeRoutes.index);
app.get('/type/:id', typeRoutes.show);
app.put('/type/:id', typeRoutes.edit);
app.delete('/type/:id', typeRoutes.delete);
app.post('/type', typeRoutes.create);

app.listen(port);
