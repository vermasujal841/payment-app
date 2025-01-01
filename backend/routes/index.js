const express=require("express");
const mainRouter = express.Router();
const userRouter=require("./user");
const accountRouter=require("./account");
app.use("/account",accountRouter);
app.use("/user",userRouter);



module.exports=mainRouter;