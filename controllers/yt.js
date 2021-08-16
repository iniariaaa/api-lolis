const { ytPlay, ytMp3, ytMp4 } = require("../lib/youtube");

async function youtubePlay(req, res) {
    const query = req.query.query;
    if (query === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter query`
    });
    ytPlay(query).then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp3(req, res) {
    const url = req.query.url;
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    ytMp3(url).then(result => {
        res.status(200).send({status: 200, result: result});
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

async function youtubeMp4(req, res) {
    const url = req.query.url;
    if (url === undefined) return res.status(404).send({
        status: 404,
        message: `Input Parameter url`
    });
    ytMp4(url).then(result => {
        res.status(200).send({
            status: 200, 
            result: result
        });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            message: 'Internal Server Error'
        })
    });
}

module.exports = { youtubePlay, youtubeMp3, youtubeMp4 };
