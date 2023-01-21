const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require('./routes/auth');
const app = express();

mongoose.set('strictQuery', false);

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const PORT = process.env.PORT || 8000;

app.use("/auth", authRoutes);

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