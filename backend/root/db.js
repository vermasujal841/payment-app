const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://admin:moshinaat123@cluster0.a6sak.mongodb.net/payment_app?retryWrites=true&w=majority&appName=Cluster0')
.then(function(data){
    console.log("DB connect")
})
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        minLength:3,
        maxLength:30,
        lowercase:true,
        trim:true,
    },
    firstName:{
        type:String,
        require:true,
        minLength:3,
        maxLength:30,
    },
    lastName:{
        type:String,
        require:true,
        minLength:3,
        maxLength:30,
    },
    password:{
        type:String,
        require:true,
        minLength:3,
        maxLength:30,
        trim:true,
    }
});
const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("User",accountSchema);

module.export={
    User,
    Account
}