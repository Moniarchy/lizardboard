const express = require( 'express' )
const router = express.Router()

const passport = require( '../auth/passport' )
const register = require( './accounts/register' )

const Account = require( '../models/account' )

router.get( '/', (request, response, next) => {
  response.render('index', { title: 'Lizardboard' })
})

router.get( '/register', (request, response, next) => {
  response.render('accounts/register', { })
})

router.post( '/register', (request, response, next) => {
  const { username, password } = request.body

  Account.register( new Account({ username }), password, register( response ))
})

router.get( '/login', (request, response, next) => {
  response.render('accounts/login', { user : request.user })
})

router.post( '/login', passport.authenticate( 'local' ),
  (request, response, next) => {
    response.redirect('/accounts/profile')
  }
)

router.get( '/profile', (request, response, next) => {
  response.render('accounts/profile', { user : request.user })
})

router.get( '/logout', (request, response, next) => {
  request.logout()
  response.redirect('/')
})

module.exports = router
