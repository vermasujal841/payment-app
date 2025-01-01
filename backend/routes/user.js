const express=require("express");
const userRouter = express.Router();
const JWT_SECRET=require("./config");
const userPayload=require("./types");

userRouter.get("/signin",function (req,res){
    const parsedUser=userPayload.safeParse(req.body);
    const username=req.body.username;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const password=req.body.password;
    if(!parsedUser.success){
        res.status(411).send("input is incorrect")
        return;
    }

    const token= jwt.sign({username:username},JWT_SECRET);
    res.status(201).json({token:token});
})

userRouter.get("/signup",async function(req,res){
    const parsedUser=userPayload.safeParse(req.body);
    const username=req.body.username;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const password=req.body.password;
    if(!parsedUser.success){
        res.status(411).send("input is incorrect")
        return;
    }


    await User.create({
        uername,
        password
    })
    res.status(200).json({
        msg:"user created successfully"
    })
    
    


})

userRouter.get("/changePassword",)


module.exports= userRouter;
