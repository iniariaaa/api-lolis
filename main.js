__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
router.get('/', async (req, res) => {
   res.sendFile(__path + '/api.html')
   })
  

module.exports = router
