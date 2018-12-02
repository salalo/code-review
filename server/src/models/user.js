const mongoose = require('mongoose')
// const bcrypt = require('bcrypt-nodejs')

const User = mongoose.Schema({
  nick: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  // registration date
  // passport
})

module.exports = mongoose.model('User', User)
// // generating a hash
// User.methods.generateHash = password => {
//   return bcrypt.hashSync(User.password, bcrypt.genSaltSync(8), null)
// }

// // password vaildation check
// User.methods.validPassword = password => {
//   return bcrypt.compareSync(password, this.localPassword)
// }

// FOR SOCIAL REGISTERS
// local: {
//   nick: String,
//   email: String,
//   password: String
// },
// facebook: {
//   id: String,
//   token: String,
//   name: String,
//   email: String
// },
// google: {
//   id: String,
//   token: String,
//   email: String,
//   name: String
// }
