const {request} = require('undici');

async function getStream(id) {
    let url = 'https://www.youtube.com/channel/' + id + '/live';
    const {body} = await request(url);
    let bodyText = await body.text();
    console.log(bodyText)
    let stream = bodyText.match(/(?<=hlsManifestUrl":").*\.m3u8/g);
    if (stream) return `{"message":"Channel is live"},{"code":"200"}`;
    else return `{"message":"Not found"},{"code":"403"}`;
}

exports.getStream = getStream;