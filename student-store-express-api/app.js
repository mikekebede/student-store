// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const morgan=require("morgan")
const db=require('./data/db.json')
 
app.use(cors());
app.use(express.json());
//app.use("/", userRouter);


app.use(morgan("tiny"))

app.get('/',(req,res)=>{
res.status(200)
res.send(db)

})

module.exports=app

