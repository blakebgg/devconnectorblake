const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("api running! & i made change"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*

const connectDB = require("./config/db");

// Connect Database
connectDB();

*/
