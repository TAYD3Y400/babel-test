const cors = require("cors");
const express = require("express");
const connectDB = require("./database");
const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use("/api/countries", require("./routes/countries"));
app.use("/api/cities", require("./routes/cities"));

app.listen (5000, () => {
    console.log("Listening on port 5000");
})