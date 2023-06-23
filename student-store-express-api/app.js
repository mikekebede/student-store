// YOUR CODE HERE
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const morgan=require("morgan")
 
app.use(cors());
app.use(express.json());
//app.use("/", userRouter);

app.use(morgan("tiny"))














module.exports=app

