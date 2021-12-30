const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    password : {
        type:String,
        require:true
    },
    phone : {
        type:Number,
        require:true
    },
    gender : {
        type:String,
        require:true
    },
    dob : {
        type:Date,
        require:true
    },
    date : {
        type:Date,
        default: Date.now
    }
})

const adminDetail = new mongoose.model("AdminDetail",adminSchema);
module.exports =adminDetail;