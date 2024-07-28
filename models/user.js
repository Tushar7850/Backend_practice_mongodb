const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp')


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
})

module.exports = mongoose.model('user',userSchema);









// const mongoose = require('mongoose')


// mongoose.connect('mongodb://127.0.0.1:27017/testapp1')

// const userSchema = mongoose.Schema({
//     name: String,
//     email: String,
//     image: String
// })

// module.exports = mongoose.model('user',userSchema)