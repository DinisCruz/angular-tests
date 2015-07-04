function TodoCtrl( $scope )
{
  $scope.todos =
  [
     { text: 'learn angular',        done:true },
     { text: 'build an angular app', done:false },
     { text: 'A NEW  Angular TO DO', done:true }
  ];

  $scope.addTodo = function()
  {
    $scope.todos.push( { text: $scope.todoText, done:false} );
    $scope.todoText = 'Default Text after a new Todo';
  }

  $scope.remaining = function()
  {
    var count = 0;
    angular.forEach( $scope.todos, function( todo )
      {
        count += todo.done ? 0 : 1;
      }
    );
  }
}
console.log(TodoCtrl)
/* vim: set tabstop=2 shiftwidth=2 expandtab: */
