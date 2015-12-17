angular.module('starter.controllers')
.controller('SearhCtrl', function($scope, BestBuyService, $log) {
    
    
//    $scope.data = {
//        search :""
//    }
//    $scope.products = [];
    $scope.search = function(term){
//        if(term){
//            console.log("fire");
            BestBuyService.search(term) 
            .success(function(data){
                $scope.products = data.products;
                $log.info(data);
            })
            .error(function(error){
              $log.error('Best Buy API Search Error...!');  
            });
            
//        }else{
//            $log.error('Search Term is empty!');
//        }
       
    };
});