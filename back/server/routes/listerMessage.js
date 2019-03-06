const router=require('express').Router();
const message = require('../models/message');
const verifyToken = require('../routes/jwt').verifyToken;


router.get('/listerMes/:idu1/:idu2',verifyToken, async (req,res)=>{
 var results = await message.find().or([{ sender : req.params.idu1,receiver: req.params.idu2},{sender : req.params.idu2,receiver: req.params.idu1 }]).sort({date :-1})
 .populate({path:'sender',select:['name','lastname']})
 .populate({path:'receiver',select:['name','lastname']}).exec();
 res.send(results);
 //console.log(results);
});
module.exports = router;