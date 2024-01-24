const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');
const app = express();
const authRouter=require('./routes/authRoutes');
// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');
// app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://sam-auth-api-user:msaleh0096@amazon.2rxgb7n.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRouter);
