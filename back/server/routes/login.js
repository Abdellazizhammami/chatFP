const router=require('express').Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken');

/**
 * @swagger
 *
 * /auth/login/:
 *   post:
 *     description: liste article by author
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: em  .
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: pwd.
 *         in: body
 *         required: true
 *         type: string
 *       
 *     responses:
 *       200:
 *         description: 
 */ 

router.post('/login', async (req,res)=>{
    
    const result = await  user.findOne({ "email": req.body.email }).exec();
    if(result!= null ){
       
        
   
    if (result.validPassword(req.body.password)) {

        jwt.sign({user : result}, 'secretKey',(err,token)=>{
            res.send({token : token, message : "welcome"});
        });
        
      
    } else {
        res.send({message : 'bad pass'});
    }
} 
else {
    res.send({message : 'you are not registred, please inscribe to our site'});
}
})
module.exports = router;
