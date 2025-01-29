const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://demo_mongodb:parth@cluster0.8xjua.mongodb.net/WT", {

});
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Server is running on 3000`);
});
