const User=require('../models/User')
const valueHandler=require('./handlers/error')
module.exports.signup_get=(req,res)=>{
    res.render('signupview');
}
module.exports.signup_post= async (req,res)=>{
    const{email,password}=req.body;
    console.log(email);
    console.log(password);
    try{
   
    const user=await User.create({email,password});
    res.status(200).json(user);
    }
    catch(e)
    {
        console.log('-----------------------');
        var errors=valueHandler.handle_values(e);
        res.status(401).json({errors});
    }

     
}
module.exports.login_get=(req,res)=>{
    res.render('loginView');
}
module.exports.login_post=(req,res)=>{
    res.send('signupview');
}