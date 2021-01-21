const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const db = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", require("./api"));

app.listen(8080, () => {
  console.log("server started on port 8080");
});

const syncDb = () => db.sync();

syncDb();
