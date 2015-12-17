angular.module('starter')
    .factory('LoginCtrl', function ($scope, $rootScope) {
            $scope.closeLogin = function () {
                $rootScope.modal.hide();
            };
    $scope.loginData = {
        username: "",
        password: ""
    };
        doLogin = function (){
            if(validateUserName(loginData.username) && validatePassword(loginData.password)){
                $rootScope.$broadcast('authenication-successed');
            
            }else{
                LogService.add({
                    data : new Data(),
                    name : 'Authenication-failed',
                    reason: 'Validation-failed'
                });
            }
        };
        $scope.doLogin = function (){
            
        };
    function validateUserName(username){
        return (userName && userName.toLowerCase() !== 'guest')
        
    };
     function validatePaassword(password){
        return (password && password.length > 4)
        
    }
    
    });