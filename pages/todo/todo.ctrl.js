angular.module('myApp').controller('TodoCtrl', function($scope){

    $scope.list = getToDoList();


    //$scope.name = 'lizeyang';

});

function getToDoList(){
    return [
        "准备周三分享",
        "Q4绩效考核",
        "消息中心开发",
        "公共组件交互"
    ]
}