require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./route/user')
const bookRoutes = require('./route/book')


app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes)
app.use('/api/book', bookRoutes)

console.log(process.env.CONNECTION_STRING);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected"))
  .catch(() => console.log("error"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
