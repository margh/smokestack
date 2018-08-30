require 'coffee-script/register'
express = require 'express'
swig = require 'swig'

port = process.env.PORT or 40080

server = express();
server
  .use express.compress()

  # Could sub this out for an nginx one with better caching.
  .use express.static "./public/"

  # Swig setup
  .engine 'html', swig.renderFile
  .set 'view engine', 'html'
  .set 'views', __dirname + '/views'

server.listen port, ->
  console.log 'listening on', port, 'in', server.settings.env

# ---------------------------------------------------------------------
# ##
# Routes
# ##

# ## Gets
server.get '/', (req, res) ->
  res.render 'index'