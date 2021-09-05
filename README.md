# youtube-stream-status
A node module to check if YouTube channel is live

![preview](https://cdn.beyondlabs.pl/official/beyondlabs_full_white.svg)

## Installation
[Node.js](https://nodejs.org/en/) required
```bash
npm install @3xanax/youtube-stream-status
```

## Usage
Require YouTube channel-id.
Example: 
```https://www.youtube.com/channel/UCiaoRUmpQ0mH05w9PVQzYPw```
```UCiaoRUmpQ0mH05w9PVQzYPw``` is the channel-id string from the above url
```js
const yt = require('@3xanax/youtube-stream-status');

yt.getStream("UCiaoRUmpQ0mH05w9PVQzYPw")
    .then(data => {
      console.log(data)
    })

```
Example output when Live:
```js
  {
      "stream": {
          "_id": "UCiaoRUmpQ0mH05w9PVQzYPw"
      }
  }
```

Example output when Offline:
```js
  {
      "stream": null
  }
```

# Support & Issues
<b>IMPORTANT</b>: Help me beeing efficient, please! I am developing in my free time for no money. Contribute to the project by posting complete, structured and helpful issues which I can reproduce quickly without asking for missing information.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y85DDFG)

# LICENSE
[MIT](https://github.com/4uss/youtube-stream-status/blob/main/LICENSE)
