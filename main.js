__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')
router.get('/ttp', async (req, res) => {
  if (!req.query.q) return res.json({ status: 404, error: 'masukkan param q'})
data = await fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(req.query.q)}`).then(v => v.json())
         base64 = data.base64
         var buffer = base64.slice(22)
         await fs.writeFileSync('ttp.png', buffer, 'base64')
    exec(`ffmpeg -i ${__path+'/ttp.png'} ${__path+'/ttp.webp'}`, (err) => {
    res.sendFile(__path+'/ttp.webp')
    })
})
const ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*`
port = process.env.PORT || 8080 || 5000 || 3000
router.get('/', (req, res) => {
    config = {
        status: true,
        info: {
        memory: ram,
        port: port
        }
    }
    res.json(config)
})

module.exports = router
