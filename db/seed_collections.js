require('es6-promise').polyfill()
const fetch = require('node-fetch')
const { clock, image, qrCode, text } = require('./widget_specifications')

const widgetSpecifications = [ clock, image, qrCode, text ]

widgetSpecifications.forEach( specification => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    body: JSON.stringify( specification )
  }
  fetch( 'http://localhost:5000/api/v1/widget_specifications', requestOptions )
})
