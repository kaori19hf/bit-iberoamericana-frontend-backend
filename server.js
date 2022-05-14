const express = require('express')
const mongoose = require('mongoose')
const app = express()


mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology:true});

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.use(require("./backend/routes/index"));
app.use(require("./backend/routes/todo"));


app.listen(3000, () => 
  console.log('Example app listening on port ')
)