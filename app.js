const express = require("express");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogCreate = require("./routes/blog.js")
app.use("/api/v1", blogCreate)

const dbConnect = require("./config/database.js");
dbConnect();

app.listen(PORT, ()=>{
      console.log(`Server started successfully at ${PORT}`);
});
app.get("/", (req,res) => {
      res.send("<h1>HELLO YAARON KYA HAAL CHAAL</h2>")
})