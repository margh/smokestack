angular.module('templates-app', ['templates/about', 'templates/employment', 'templates/main', 'templates/print', 'templates/projects']);

angular.module("templates/about", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/about",
    "<div>I'm kind of a big deal</div>");
}]);

angular.module("templates/employment", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/employment",
    "<div>I've had jobs</div>");
}]);

angular.module("templates/main", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/main",
    "<div id='resume'>\n" +
    "  <header class='header'>\n" +
    "    <h1>Nathan Rashleigh</h1>\n" +
    "  </header>\n" +
    "\n" +
    "  <nav class=\"nav\">\n" +
    "    <!-- <a href=\"#about\">\n" +
    "      <i class=\"fa fa-info-circle\"></i>\n" +
    "      <span>About Me</span>\n" +
    "    </a>\n" +
    "    <a href=\"#employment\">\n" +
    "      <i class=\"fa fa-institution\"></i>\n" +
    "      <span>Employment</span>\n" +
    "    </a>\n" +
    "    <a href=\"#projects\">\n" +
    "      <i class=\"fa fa-gamepad\"></i>\n" +
    "      <span>Projects</span>\n" +
    "    </a>\n" +
    "    <a ui-sref=\"print\">\n" +
    "      <i class=\"fa fa-print\"></i>\n" +
    "      <span>Printable</span>\n" +
    "    </a>  -->\n" +
    "    <a href=\"mailto:nrashleigh@smokestack.io\">\n" +
    "      <i class=\"fa fa-envelope\"></i>\n" +
    "      <span>Email</span>\n" +
    "    </a>\n" +
    "    <a>\n" +
    "      <i class=\"fa fa-mobile\"></i>\n" +
    "      <span>0433 034 004</span>\n" +
    "    </a>\n" +
    "    <a href=\"https://twitter.com/nrashleighs\">\n" +
    "      <i class=\"fa fa-twitter\"></i>\n" +
    "      <span>Twitter</span>\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/margh/smokestack\">\n" +
    "      <i class=\"fa fa-github\"></i>\n" +
    "      <span>Github</span>\n" +
    "    </a>\n" +
    "  </nav>\n" +
    "\n" +
    "  <main class='main'>\n" +
    "    <div id=\"about\">\n" +
    "      <h2>About Me</h2>\n" +
    "      <div>\n" +
    "        Hi, I'm Nathan Rashleigh, a developer originally from Brisbane but recently moved to Melbourne.\n" +
    "        I've been involved in Node.js more or less since its inception have an interest in cryptography and game development.\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"skills\">\n" +
    "      <h2>Skills</h2>\n" +
    "      <div>\n" +
    "        <h4>Programming Languages:</h4>\n" +
    "        <h5>Primary:</h5>\n" +
    "        <ul>\n" +
    "          <li>Node.js</li>\n" +
    "          <li>Coffee-Script / Javascript</li>\n" +
    "          <li>AngularJS</li>\n" +
    "          <li>HTML5</li>\n" +
    "          <li>Stylus / Less / CSS</li>\n" +
    "        </ul>\n" +
    "        <h5>Experience with:</h5>\n" +
    "        <ul>\n" +
    "          <li>Python</li>\n" +
    "          <li>C#</li>\n" +
    "          <li>C/C++</li>\n" +
    "          <li>SQL</li>\n" +
    "          <li>Scheme</li>\n" +
    "          <li>LATEX</li>\n" +
    "        </ul>\n" +
    "        <h5>Technology:</h5>\n" +
    "        <ul>\n" +
    "          <li>Docker / Dokku / Heroku</li>\n" +
    "          <li>SQL</li>\n" +
    "          <li>MongoDB</li>\n" +
    "          <li>Debian / Ubuntu</li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"employment\">\n" +
    "      <h2>Employment</h2>\n" +
    "\n" +
    "      <div class=\"item\">\n" +
    "        <div class='title'>Merge Gaming / Codeworx</div>\n" +
    "        <div class='detail'>\n" +
    "          <span>Mobile Poker Lead Developer</span>\n" +
    "          <span class=\"right\">Jan. 2011 - Present</span>\n" +
    "        </div>\n" +
    "        <div class=\"description\">\n" +
    "          <p>Created a <a href=\"https://gameclient.eu/carbonpoker\">mobile poker web-app</a> with a three man team that has been running smoothly in production since September 2013. I was responsible for all releases and deployments.</p>\n" +
    "          <ul>\n" +
    "            <li>Node.js Webserver</li>\n" +
    "            <li>Websocket Connections</li>\n" +
    "            <li>Coffeescript</li>\n" +
    "            <li>Browserify</li>\n" +
    "            <li>Evented XML parser for legacy system feed</li>\n" +
    "            <li>HTML5 including Audio, appcache and a custom MVC framwork</li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"item\">\n" +
    "        <div class='detail'>\n" +
    "          <span>Fantasy Sports Developer</span>\n" +
    "          <span class=\"right\">Nov. 2014 - Present</span>\n" +
    "        </div>\n" +
    "        <div class=\"description\">\n" +
    "          <p>A fantasy sports web-app designed for browsers and mobiles with a responsive layout and realtime scoring feed using websockets. Currently in a limited production release.</p>\n" +
    "          <ul>\n" +
    "            <li>AngularJS</li>\n" +
    "            <li>Vagrant VM server bundle</li>\n" +
    "            <li>Websocket connections</li>\n" +
    "            <li>Integration and unit tested with Karma</li>\n" +
    "            <li>Customised Semantic UI framework</li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"projects\">\n" +
    "      <h2>Projects</h2>\n" +
    "\n" +
    "      <div class=\"item project\">\n" +
    "        <div class='detail'>\n" +
    "          <span><a href=\"http://cryptopals.com/\">Matasano Crypto Challenges</a></span>\n" +
    "        </div>\n" +
    "        <div class=\"description\">\n" +
    "          <p>I've been working on these challenges on and off in Python. To summarise, they are a collection of problems designed to explain real world cryptography attacks.</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"item project\">\n" +
    "          <div class='detail'>\n" +
    "            <span><a href=\"https://www.coursera.org/course/hiddenmessages\">University of San Diego - Bioinformatics</a></span>\n" +
    "          </div>\n" +
    "          <div class=\"description\">\n" +
    "            <p>A Coursera course on bioinformatics and the role computers play in biology. I completed the course using Python.</p>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "      <div class=\"item project\">\n" +
    "          <div class='detail'>\n" +
    "            <span><a href=\"http://seinfeld.smokestack.io\">Chain Calendar</a></span>\n" +
    "          </div>\n" +
    "          <div class=\"description\">\n" +
    "            <p>A Seinfeld inspired chain calendar I wrote to teach myself AngularJS. Runs on a Node.js back end and uses MongoDB for persistence.</p>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </main>\n" +
    "\n" +
    "  <footer class='footer'>\n" +
    "    <span>Made with Flexbox <3</span>\n" +
    "  </footer>\n" +
    "</div>");
}]);

angular.module("templates/print", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/print",
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "\n" +
    "    <!-- Apple + Mobile -->\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\n" +
    "    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n" +
    "    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">\n" +
    "    <title>smokestack</title>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <div ng-include src=\"'templates/about'\"></div>\n" +
    "    <div ng-include src=\"'templates/employment'\"></div>\n" +
    "    <div ng-include src=\"'templates/projects'\"></div>\n" +
    "  </body>\n" +
    "\n" +
    "  <!-- CSS -->\n" +
    "  <link href=\"/css/styles.css\" type=\"text/css\" rel=\"stylesheet\">\n" +
    "</html>");
}]);

angular.module("templates/projects", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/projects",
    "<div>I do stuff for fun</div>");
}]);
