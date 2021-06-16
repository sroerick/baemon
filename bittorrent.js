import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// can now use `require` in an ESM

var dragDrop = require('drag-drop')
var WebTorrent = require('webtorrent')
// import dragDrop  'http://yui.yahooapis.com/2.9.0/build/dragdrop/dragdrop-min.js'


var client = new WebTorrent()

// When user drops files on the browser, create a new torrent and start seeding it!
console.log('test')
dragDrop('body', function (files) {
  client.seed(files, function (torrent) {
    console.log('Client is seeding:', torrent.infoHash)
  })
})
