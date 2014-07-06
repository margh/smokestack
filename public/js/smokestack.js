(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AppView;

AppView = require('./views/appView.coffee');

$(function() {
  var viewportFix;
  viewportFix = function() {
    var _ref;
    return (_ref = document.querySelector('meta[name=viewport]')) != null ? _ref.content = "width=" + window.innerWidth + ", height=" + window.innerHeight + ", minimum-scale=1, maximum-scale=1, user-scalable=no" : void 0;
  };
  window.onorientationchange = viewportFix;
  viewportFix();
  $('#parallaxScene').parallax({
    frictionX: 0.1,
    frictionY: 0.1,
    scalarX: 10,
    scalarY: 10
  });
  return $('.app-nav').one('click', function() {
    return $('#logoWrapper').addClass('fadeOut');
  });
});


},{"./views/appView.coffee":2}],2:[function(require,module,exports){
module.exports = Backbone.View.extend;


},{}]},{},[1,2]);