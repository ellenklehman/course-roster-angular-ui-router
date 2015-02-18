var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider.state('home', {
    url: "/",
    templateUrl: "partials/home.html"
  })

  $stateProvider.state('courses', {
    url: "/courses",
    templateUrl: "partials/courses.html",
    controller: 'CoursesCtrl'
  })

  $stateProvider.state('courses.detail', {
    url: "/:courseId",
    templateUrl: "partials/courses.detail.html",
    controller: 'StudentsCtrl'
  })
});
