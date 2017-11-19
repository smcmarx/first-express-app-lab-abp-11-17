var express = require('express')
var app = express()

// Build Your Route Here
app.get('/', function(req, resp){
  console.log(req)
  console.log(resp)

  resp.send("Hello, World!")
})

module.exports = app
