const {request} = require('undici');

async function getStream(id) {
    let url = 'https://www.youtube.com/channel/' + id + '/live';
    const {body} = await request(url);
    let bodyText = await body.text();
    let stream = bodyText.match(/(?<=hlsManifestUrl":").*\.m3u8/g);
    if (stream) return JSON.parse(`
    {
        "stream": {
            "_id": "${id}"
        }
    }`);
    else return JSON.parse(`
    {
        "stream": null
    }`);
}
exports.getStream = getStream;