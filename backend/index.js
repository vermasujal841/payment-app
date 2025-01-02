const mainRouter=require("./routes/index")
const express = require("express");

const app=express();
const cors=require("cors");
app.use(express.json())
app.use(cors({}));

const PORT=3000;

app.use("/api/v1",mainRouter);// here we have created a dynamic route which take the extended route from routes and add it to this


app.listen(PORT,function(){
    console.log(`App is listning at port ${PORT}`)
})
// /api/v1/user/signin
// /api/v1/user/signup
// /api/v1/user/



