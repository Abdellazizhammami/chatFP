

const router = require('express').Router();
const Users = require('../models/user');
const verifyToken = require('../routes/jwt').verifyToken;

/**
 * @swagger
 *
 * /dash/listerUser/{idUsers} :
 *   get:
 *     description: liste des utilisateur 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: idUsers
 *         description: id of the athentified user.
 *         in: path
 *         required: true
 *         type: string
 *      
 *       
 *     responses:
 *       200:
 *         description: les liste des utilisateur inscrit
 */
router.get('/listerUser/:idUser', async (req, res) => {
    try {
        User = await Users.find().exec();
        //console.log('7aja');
         res.send(User);
    } catch (error) {
        res.send(' bad id something is wrong');
    }
})

module.exports = router ;