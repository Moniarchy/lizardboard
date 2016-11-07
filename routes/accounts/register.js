const passport = require( '../../auth/passport' );

const register = response => ( error, account ) => {
  if( error ) {
    return response.render( 'register', { account } )
  } else {
    passport.authenticate( 'local', ( req, res, () => {
      response.redirect( '/accounts/profile' )
    }))
  }
}

module.exports = register
