angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.about', {
    url: '/page5',
    views: {
      'tab5': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController.contact', {
    url: '/page6',
    views: {
      'tab6': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

  .state('tabsController.home', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.eventGuide', {
    url: '/page9',
    views: {
      'tab8': {
        templateUrl: 'templates/eventGuide.html',
        controller: 'eventGuideCtrl'
      }
    }
  })

  .state('tabsController.ourSponsors', {
    url: '/page10',
    views: {
      'tab7': {
        templateUrl: 'templates/ourSponsors.html',
        controller: 'ourSponsorsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page6')


});