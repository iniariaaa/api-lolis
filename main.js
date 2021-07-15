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
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
async function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}
router.get('/', async (req, res) => {
   res.sendFile(__path + '/api.html')
   })

 router.get('/loli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
   random = getRandom(json)
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
 router.get('/shota', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
   random = getRandom(json)
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
  

module.exports = router
