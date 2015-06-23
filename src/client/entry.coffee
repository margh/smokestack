app = angular.module 'nathan', [
  'templates-app'
  'ui.router'
]

app.config ['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) ->

    $urlRouterProvider.otherwise 'home'

    # Routing
    $stateProvider
      .state 'home',
        url: ''
        title: 'Smokestack'
        templateUrl: 'templates/main'

      # you need to route directly to this state because the above states are abstract
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