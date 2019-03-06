const router=require('express').Router();
const message = require('../models/message');
const verifyToken = require('../routes/jwt').verifyToken;
router.post('/ajoutMes/:idSender/:idReceiver',verifyToken, async (req,res)=>{

var  newMess = new message();
newMess.sender= req.params.idSender;
newMess.receiver=req.params.idReceiver;
newMess.corps=req.body.corps;

newMess.save(function(err, savedUser){
    if (err) {
        console.log(err);
        return res.status(500).send();
    }
    else{

    return res.status(200).send({message :'you have successufuly add a new message'});
} });     
})
module.exports = router ;