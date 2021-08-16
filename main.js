__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
const request = require('request');
const fs = require('fs-extra');
const { youtubePlay, youtubeMp4, youtubeMp3 } = require('./controllers/yt');
var axios = require('axios')
var fetch = require('node-fetch');
var { fetchJson } = require(__path + '/lib/fetcher.js')
const cheerio = require('cheerio');
var download = function(uri, filename, callback){
   request.head(uri, function(err, res, body){
     console.log('content-type:', res.headers['content-type']);
     request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
   });
 };

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
router.all('/ytplay', youtubePlay);
router.all('/ytmp4', youtubeMp4);
router.all('/ytmp3', youtubeMp3);
router.all('/', async (req, res) => {
   res.sendFile(__path + '/home.html')
   })
router.all('/wptekno', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/wptekno.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, result: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })

   router.all('/loli', async (req, res, next) => {
    apikey = req.query.apikey
    
    data = await fetchJson('https://api.waifu.pics/sfw/waifu')
    var { exec } = require('child_process')
    var urlnya = data.url
                  download(urlnya, './media/image.jpg', function(){
                    res.sendFile('./media/image.jpg', { root: __dirname })
    })
  })

  router.all('/nsfwneko', async (req, res, next) => {
    apikey = req.query.apikey
    
    data = await fetchJson('https://api.waifu.pics/nsfw/neko')
    var { exec } = require('child_process')
    var urlnya = data.url
                  download(urlnya, './media/image.jpg', function(){
                    res.sendFile('./media/image.jpg', { root: __dirname })
    })
  })
   router.get('/hilih', async (req, res, next) => {
        
    kata = req.query.kata
    

if(!kata) return res.json({ status : false, message : "masukan parameter kata"})

fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
.then(response => response.json())
.then(data => {
var result = data;
     res.json({
         result
     })
 })
 .catch(e => {
   res.json(loghandler.error)
})
})
router.all('/tebakgambar', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/tebakgambar.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, result: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   router.all('/caklontong', async (req, res) => {
    try {
    json = JSON.parse(fs.readFileSync('lib/caklontong.json').toString())
    random = json[Math.floor(Math.random() * json.length)]
    res.send({ status: 200, result: random })
    } catch (e) {
    res.send({ status: 400, response: 'Server Error!' })
    }
    })
router.all('/cerpen', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/cerpen.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, result: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   router.all('/textmaker/game', async (req, res, next) => {
      var theme = req.query.theme
      var text = req.query.text
      var text2 = req.query.text2
      try {
        if (theme == 'pubg') { 
          request.post({
              url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `text_1=${text}&text_2=${text2}&login=OK`,
          }, (e,r,b) => {
            if (!e) {
              $ = cheerio.load(b)
              $(".thumbnail").find("img").each(function() {
                h = $(this).attr("src")
                var result = "https://photooxy.com/"+h
                fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=abcd`))
                .then(response => response.json())
                .then(data => {
                  var urlnya = data.data.url
                  download(urlnya, './media/image.jpg', function(){
                    res.sendFile('./media/image.jpg', { root: __dirname })
                  });
                })
              })
            }
          })
        } 
      } catch (error) {
        console.log(error)
        res.send({status: 500, message: 'Internal Server Error'})
      }
    })
router.all('/couple', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/couple.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, result: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
router.all('/bucin', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/bucin.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, text: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
 router.all('/shota', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.send({ status: 200, url: random })
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   router.all('*', async (req, res) => {
   res.status(404).json({
            status:404,
            error: 'Gada Bang'
        })
})
  

module.exports = router
