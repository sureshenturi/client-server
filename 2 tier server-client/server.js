const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors());

app.get("/fruits",(req,res)=>{

    let fruits =["Apple","Pineapple","Mango"];

    res.json(fruits);
});

app.listen(4567,()=>{

    console.log("Listening to port 4567");
});
