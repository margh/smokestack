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
    "    <a ui-sref=\"home.about\">\n" +
    "      <i class=\"fa fa-info-circle\"></i>\n" +
    "      <span>About Me</span>\n" +
    "    </a>\n" +
    "    <a ui-sref=\"home.projects\">\n" +
    "      <i class=\"fa fa-gamepad\"></i>\n" +
    "      <span>Projects</span>\n" +
    "    </a>\n" +
    "    <a ui-sref=\"home.employment\">\n" +
    "      <i class=\"fa fa-institution\"></i>\n" +
    "      <span>Employment</span>\n" +
    "    </a>\n" +
    "    <a ui-sref=\"print\">\n" +
    "      <i class=\"fa fa-print\"></i>\n" +
    "      <span>Printable</span>\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/margh/smokestack\">\n" +
    "      <i class=\"fa fa-github\"></i>\n" +
    "      <span>Github</span>\n" +
    "    </a>\n" +
    "  </nav>\n" +
    "\n" +
    "  <main class='main' ui-view></main>\n" +
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
