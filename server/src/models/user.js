const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const User = mongoose.Schema({
  nick: String,
  email: String,
  password: String
})

// generating a hash
User.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// password vaildation check
User.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
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
