const express = require('express');
const app=express();
const notes=require('./data/notes')
const dotenv=require('dotenv');
dotenv.config();



app.get('/',(req,res)=>{
    res.send("hi");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
const PORT= process.env.PORT || 5000;
app.listen(PORT, console.log("hello motherfucker"));