const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user.js')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'nick',
    emailField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },

  (req, nick, email, password, done) => {
    // asynchronous
    process.nextTick(() => {
      // find a user whose email is the same as the forms email
      User.findOne({ 'local.email': email, 'local.nick': nick }, (err, user) => {
        if (err) {
          return done(err)
        }
        // check to see if theres already a user with that email or nick
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email or nick is already in use'))
        } else {
          // if there is no user with that email
          // create the user
          let newUser = new User()

          // set the user's local credentials
          newUser.local.nick = nick
          newUser.local.email = email
          newUser.local.password = newUser.generateHash(password)

          // save the user
          newUser.save(err => {
            if (err) {
              throw err
            }
            return done(null, newUser)
          })
        }
      })
    })
  }))
}
