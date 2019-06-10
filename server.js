const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect Database
connectDB();

app.get("/", (req, res) =>
  res.send("api running! & i made change, then i made another")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*

const connectDB = require("./config/db");

// Connect Database
connectDB();

*/
