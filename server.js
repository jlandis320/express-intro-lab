// import modules
import express from 'express'
import { dogs } from "./data/dogs-data.js";

// create Express app
const app = express()

// configure the app
// "Error: no default engine was specified...." means you need to specify a view engine
app.set('view engine', 'ejs')

// mount middleware

// mount routes

// req = request, res = result
app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/dogs', function(req, res) {
  res.render('dogs/index', {
    dogs: dogs
  })
})

// tell the app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000');
})

