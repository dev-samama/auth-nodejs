module.exports.handle_values=(err)=>{
  var error={};
  console.log(err);

  if(err.code===11000){
    error.email='Email already in use';
    return error;
  }
  if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
        console.log(properties);
        error[properties.path]=properties.message;
    });
  }
  return error;
}