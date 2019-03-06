const mongoose=require('mongoose');

const message=new mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    date:{type: Date, default:Date.now},
    corps:String
    
});
const messageModel = mongoose.model('messages',message);

module.exports = messageModel;