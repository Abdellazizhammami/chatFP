const router=require('express').Router();
const Users = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


router.post('/register',function (req,res)  {
    var name = req.body.name;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;

    var newuser = new Users();
    newuser.name = name;
    newuser.lastname = lastname;
    newuser.email = email;
    newuser.password = newuser.generatehash(password)  ;
    newuser.save(function(err, savedUser){
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        else{
            jwt.sign({user : savedUser}, 'secretKey',(err,token)=>{
                res.send({token : token, message : "you have successufuly subscribed to our site"});
            });

        return res.status(200).send({message : 'you have successufuly subscribed to our site'});
    } });
   
})

module.exports = router;