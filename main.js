__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var fs = require('fs')
router.get('/ttp', async (req, res) => {
  if (!req.query.q) return res.json({ status: 404, error: 'masukkan param q'})
  random = new Date
data = await fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(req.query.q)}`).then(v => v.json())
         base64 = data.base64
         var buffer = base64.slice(22)
         await fs.writeFileSync(`ttp.png`, buffer, 'base64')
        res.sendFile(__path+'/ttp.png')
})
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}

router.get('/', (req, res) => {
date = new Date
var jam = date.getHours()
var menit = date.getMinutes()
var detik = date.getSeconds()
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var cpu = require('os').cpus()
port = process.env.PORT || 8080 || 5000 || 3000    
      config = {
        status: 'active',
        url: 'https://recoders-area.caliph.repl.co',
        info: {
        memory: ram,
        port: port,
        cpu: cpu[0].model,
        timeserver: jam+menit+detik,
        uptime: kyun(process.uptime())
        }
    }
    res.json(config)
})

module.exports = router
