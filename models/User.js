const mongoose = require("mongoose");
const {isEmail} =require('validator');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema(
{
        email:{
        type: String,
        required: [true,'please enter an email'],
        unique:[true,'email is already in use'],
        lowercase:true,
        validate:[isEmail,'please enter a valid email']
            },
        password:{
            type:String,
            minlength:[6,'password should be atleast 6 characters'],
            required:[true,'please enter a password']
            }
}
);
userSchema.pre('save',async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

const User=new mongoose.model('user',userSchema);
module.exports=User;