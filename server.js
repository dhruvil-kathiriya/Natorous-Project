const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const port = process.env.PORT || 3000;

// const db = require('./config/mongoose');

const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.mongo_url}`)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`App running on port : ${port}`);
});
