const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    phone : {
        type:Number,
        require:true
    },
    address : {
        type:String,
        require:true
    },
    date : {
        type:Date,
        default: Date.now
    }
})

const UserDetail = new mongoose.model("UserDetail",userSchema);
module.exports =UserDetail;