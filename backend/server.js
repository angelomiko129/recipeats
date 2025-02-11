// dependecies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const auth = require("./routes/authRoutes");
const recipe = require("./routes/recipeRoutes");

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes and apis
app.use("/api/auth", auth);
app.use("/api/recipes", recipe);

// mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb Connected");
    const PORT = process.env.PORT || 5000;
    const IP_ADDRESS = process.env.IP_ADDRESS || "localhost";
    app.listen(PORT, IP_ADDRESS, () =>
      console.log(`Server running at port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

// validation of connection
app.get("/", (req, res) => {
  res.json({ mes: "hello, world" });
});
