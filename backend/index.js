const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 8080;

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/contacts', require('./routes/contact'));

// Heroku connect step
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static('../build'));
// }

app.listen(port, () => {
  console.log(`PlotterJotter listening at http://localhost:${port}`)
})