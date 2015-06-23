(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app;

app = angular.module('nathan', ['templates-app', 'ui.router']);

app.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('home');
    return $stateProvider.state('home', {
      url: '',
      title: 'Smokestack',
      templateUrl: 'templates/main'
    }).state('home.about', {
      url: '/about',
      title: 'Smokestack - About Me',
      templateUrl: 'templates/about'
    }).state('home.projects', {
      url: '/projects',
      title: 'Smokestack - Projects',
      templateUrl: 'templates/projects'
    }).state('home.employment', {
      url: '/employment',
      title: 'Smokestack - Employment',
      templateUrl: 'templates/employment'
    }).state('print', {
      url: '/print',
      title: 'Smokestack - Employment',
      templateUrl: 'templates/print'
    });
  }
]);


},{}]},{},[1]);