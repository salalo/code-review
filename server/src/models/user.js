const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  }
},
{
  collection: 'users'
})

module.exports = mongoose.model('User', User)
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
// generating a hash
// User.methods.generateHash = password => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }

// // password vaildation check
// User.methods.validPassword = password => {
//   return bcrypt.compareSync(password, this.local.password)
// }
