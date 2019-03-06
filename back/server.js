const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors=require('cors')
mongoose.connect('mongodb://localhost:27017/chatBD',{ useNewUrlParser: true })
const app = express()
///////////////////////////////////////////////////
//morgan
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

///////////////////////////////
app.use(cors());
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });




app.use(bodyparser.json())



const login=require('./server/routes/login')
const register=require('./server/routes/register')


const listerUser=require('./server/routes/listerUser')
const ajouterMessage = require('./server/routes/ajouterMessage')

const listerMessage = require('./server/routes/listerMessage')

const swagger = require('./server/routes/swagger')


app.use('/auth',login )


app.use('/register',register)
app.use('/mes',ajouterMessage)
app.use('/user',listerUser)

app.use('/mes',listerMessage)
app.use('/api-docs',swagger)






app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3001')
})