angular.module('mymodule',['myService'])
.controller('uControl',function($scope,userService)
{
    //$scope.userData=['Admin','Manager','Consultant','Engineer','Developer'];
    $scope.userData=userService.showUsers();
    var uid =1;
    $scope.addNew= function(){
    //$scope.userData.push($scope.user);
    //$scope.user=[];

    userService.addUser($scope.user);
    $scope.user = {};
    }

    $scope.delete = function(id) {
        
        userService.deleteUser(id);
        
    }

    $scope.edit = function(id) {
        //userService.updateUser(id);
        $scope.user = angular.copy(userService.updateUser(id));
    }
})
.controller('uControl2',function($scope)
{
    //$scope.userData=['Admin','Manager','Consultant','Engineer','Developer'];
    $scope.users=[];
    $scope.addNew= function(){
    $scope.users.push($scope.user);
    $scope.user=[];
    }
})