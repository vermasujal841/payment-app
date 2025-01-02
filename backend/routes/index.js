const express=require("express");
const mainRouter = express.Router();
const userRouter=require("./user");
const accountRouter=require("./account");
mainRouter.use("/account",accountRouter);
mainRouter.use("/user",userRouter);



module.exports=mainRouter;