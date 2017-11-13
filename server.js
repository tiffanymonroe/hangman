//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Middleware
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//Controllers

//Index Route
app.get('/', (req, res)=>{
  res.render('index.html')
});

//Connections
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
  console.log('mongo is running');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('hangman!');
});
