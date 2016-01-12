angular.module('myApp', [
    'giantray.util',
    'ui.router'
]);


angular.module('myApp').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('todo', {
            url: "/todo",
            templateUrl: "pages/todo/todo.html",
            controller: 'TodoCtrl',
            controllerAs: 'todo'
        })
        .state('done', {
            url: "/done",
            templateUrl: "pages/done/done.html",
            controller: 'DoneCtrl',
            controllerAs: 'done'
        })


}]);

