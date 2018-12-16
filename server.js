var http = require('http')

http
  .createServer(function(request, response) {
    console.log(request.url)
    let path = request.url

    if (path === '/') {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Document</title>
          <link rel="stylesheet" href="style.css">
          <script src='main.js'></script>
        </head>
        <body>
          <h1>hello server.js</h1>
        </body>
        </html>    
      `)
    } else if (path === '/style.css') {
      response.writeHead(200, { 'Content-Type': 'text/css' })
      response.end('* {color: red}')
    } else if (path === '/main.js') {
      response.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' })
      response.end(`console.log('我是一个js文件')`)
    } else {
      console.log('404')
      response.statusCode = 404
      response.end()
    }
  })
  .listen(8888)
