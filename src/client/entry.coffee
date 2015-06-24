app = angular.module 'nathan', [
  'templates-app'
  'ui.router'
]

app.config ['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) ->

    $urlRouterProvider.otherwise ''

    # Routing
    $stateProvider
      .state 'home',
        url: ''
        title: 'Smokestack - Nathan Rashleigh'
        templateUrl: 'templates/main'

      .state 'home.about',
        url: '/about'
        title: 'Smokestack - About Me'
        templateUrl: 'templates/about'

      .state 'home.projects',
        url: '/projects'
        title: 'Smokestack - Projects'
        templateUrl: 'templates/projects'

      .state 'home.employment',
        url: '/employment'
        title: 'Smokestack - Employment'
        templateUrl: 'templates/employment'

      .state 'print',
        url: '/print'
        title: 'Smokestack - Employment'
        templateUrl: 'templates/print'
  ]