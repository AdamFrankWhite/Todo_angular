'use strict';
angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole

  $scope.addTodo = function() {
    var todo = {name: "New Todo"}
    $scope.todos.unshift(todo);
  }
  let callbackFunction = function(response){
    console.log(response.data)
    $scope.todos = response.data;
  }
  dataService.getTodos(callbackFunction);

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo)
    $scope.todos.splice($index, 1);
  }

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo){
      if (todo.edited) {
        return todo;
      }
    })
    dataService.saveTodos(filteredTodos)
  }

})
