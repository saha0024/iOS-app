angular.module('starter')
    .factory('BestBuyService', ['$http', function ($http) {
            var bestBuyAPIendPoint = 'http://api.bestbuy.com/v1';
            var key = 'dxbfrrs928cyk3kqh85ubt4p';

            return {

                search: function (term) {
                    
                    return $http.get(bestBuyAPIendPoint + '/products((search=' + term + '))?show=name,sku,salePrice,image&format=json&apiKey=' + key);
                    
                        }
         };
            }]);