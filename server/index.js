const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const app = express();

mongoose.set('strictQuery', false);

dotenv.config();
app.use(cors());

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

const PORT = process.env.PORT || 8000;

// Authentification routes 
app.use("/api/auth", authRoutes);


// Posts routes
app.use("/api/posts", postRoutes);



mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Conntected to DB successfully 🚀");
      console.log(`Server running on port: ${PORT} 🕵️`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });