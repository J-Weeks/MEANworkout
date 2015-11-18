
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
  console.log("Hello World from controller");

  var refresh = function(){
    $http.get('/workoutlist').success(function(response){
      $scope.workoutlist = response;
      $scope.workout = '';
    });
  };

  refresh();

  $scope.addWorkout = function(){
    console.log($scope.workout);
    $http.post('/workoutlist', $scope.workout).success(function(response){
      console.log(response);
      refresh();
    });
  };

  $scope.deleteWorkout = function(id){
    console.log(id);
    $http.delete('/workout/' + id).success(function(response){
      refresh();
    });
  };

  $scope.editWorkout = function(id){
    $http.get('/workoutlist/' + id).success(function(response){
      $scope.workout = response;
    });
  };

  $scope.updateWorkout = function(id){
    $http.put('/workoutlist/' + $scope.workout._id, $scope.workout).success(function(response){
      refresh();
    });
  };

}]);

