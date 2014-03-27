express = require 'express'

port = 8080

server = express();
server
  .use(express.static "./public")

server.listen port, ->
  console.log 'listening on', port, 'in', server.settings.env

# # Routes

# ## Gets
server.get '/', (req, res) ->
  console.log 'got req', req
  res.send """
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <title>smokestack</title>
      </head>
      <body>
        <div id="logo">smokestack</div>
      </body>
      <link href="/css/styles.css" type="text/css" rel="stylesheet">
    </html>
  """

server.get '/nathan', (req, res) ->
  res.send "verily"