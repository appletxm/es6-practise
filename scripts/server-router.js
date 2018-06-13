const fs = require('fs')
const path = require('path')

function getImageFile (req, res) {
  let filename = path.join(__dirname, ('..' + req.baseUrl))
  let fileType = (req.baseUrl).match(/.+\.(.+)/)
  let file = fs.readFileSync(filename)

  res.set('content-type', 'image/' + fileType[1])
  res.send(file)
  res.end()
}

function getHtmlFile (req, res) {
  let htmlFilePath = path.join(__dirname, '../index.html')
  let html = fs.readFileSync(htmlFilePath)

  res.set('content-type', 'text/html')
  res.send(html)
  res.end()
}

function assignRouter (req, res, next) {
  console.info('****', req.baseUrl, req.originalUrl)
  if (req.originalUrl.indexOf('assets/images') >= 0) {
    getImageFile(req, res)
  } else {
    getHtmlFile(req, res)
  }

  if (next && typeof next === 'function') {
    next()
  }
}

module.exports = assignRouter
