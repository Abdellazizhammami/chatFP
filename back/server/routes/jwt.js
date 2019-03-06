const jwt = require('jsonwebtoken');

module.exports.verifyToken = function(req,res,next){

    const bearerHeader = req.headers.authorization;

    if(typeof bearerHeader != 'undefined'){

        const bearer = bearerHeader.split(' ');
        var token = bearer[1];
        jwt.verify(token,'secretKey',(err,decoded)=>{
            if(err){
                res.send({message: "badtoken"});
            }
            else{
                //console.log('il est authentifier');
                next();
            }
        })
    

    } else {
        res.sendStatus(403);
    }


}