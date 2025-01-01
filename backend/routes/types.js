const zod=require("zod");

const userPayload=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
module.exports=userPayload;
