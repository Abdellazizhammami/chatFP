const mongoose = require('mongoose');
const bcrypt=require('bcrypt-nodejs');

const user = new mongoose.Schema({
    name: String,
    lastname: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 }
   
});

user.methods.generatehash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(9));
}

user.methods.validPassword=function(password){
    try {
        return bcrypt.compareSync(password,this.password);
    } catch (error) {
        return false;
    }
   
    
}



const userModel = mongoose.model('users',user);

module.exports = userModel;
