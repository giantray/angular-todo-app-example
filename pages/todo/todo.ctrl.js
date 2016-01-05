angular.module('myApp').controller('TodoCtrl', function ($scope, localStorageSvr) {
    var TODO_LIST = "TODO_LIST";

    $scope.list = getTodoListFromLocalStorage();
    $scope.newTodo = "";

    //$scope.name = 'lizeyang';

    $scope.addTodo = function () {
        $scope.list.push({createTime: new Date().getTime(), text: $scope.newTodo});
        setToDoListToLocalStorage();
    }

    $scope.isShowInputTip = function () {
        return $scope.newTodo && $scope.newTodo.length != 0;
    }

    $scope.removeTodo = function (selectItem) {
        var index = $scope.list.indexOf(selectItem);
        $scope.list.splice(index, 1);
        setToDoListToLocalStorage();
    }

    $scope.hasCompletedItems = function () {
        return $scope.getCompletedItemSum() > 0;
    }

    $scope.cleanCompletedItems = function () {
        var listAfterClean = [];
        angular.forEach($scope.list, function (item) {
            if (!item.done) {
                listAfterClean.push(item);
            }
        })
        $scope.list = listAfterClean;
        setToDoListToLocalStorage();
    }

    $scope.getCompletedItemSum = function () {
        var sum = 0;
        angular.forEach($scope.list, function (item) {
            if (item.done) {
                sum++;
            }
        })
        return sum;
    }

    function setToDoListToLocalStorage () {
        localStorageSvr.setItem(TODO_LIST, angular.toJson($scope.list));
    }

    function getTodoListFromLocalStorage() {
        var list = angular.fromJson(localStorageSvr.getItem(TODO_LIST));
        if(!list){
            list = [];
        }
        return list;
    }

});

function getToDoList() {

    return [
        {createTime: 1449119707026, text: "准备周三分享"},
        {createTime: 1449119707026, text: "Q4绩效考核"},
        {createTime: 1449119707026, text: "消息中心开发"},
        {createTime: 1449119707026, text: "公共组件交互"}
    ]
}