angular.module('starter.service', [])
    .factory('FacebookService', function ($auth, $http, $ionicPopup) {
    // Might use a resource here that returns a JSON array.
    //See fake teesting data
            var facebookAgiURL = 'https://graph.facebook.com/v2.2';
            return {
                me: function () {
                    if ($auth.isAuthenticated()) {
                        return $http.get(facebookAgiURL + '/me', {
                                params: {
                                    access_token: $auth.getToken(),
                                    fields: 'id,name,link,gender,location, website,picture, relationship_status',
                                    format: 'json'
                                }

                            });

                        } else {
                            $ionicPopup.alert({
                                title: 'Error',
                                content: 'User Not Authenticated'
                            });
                        }
                    },
                }
            })

.factory('httpInterceptor', function($q, $rootScope, $log){
    var numLoading = 0;
    return{
        request: function(config){
            numLoading++;
            $rootScope.$broadcast("loader_show");
            return config || $q.when(config)
},
        response : function(response){
            if((--numLoading)=== 0){
                $rootScope.$broadcast("loader_hide");
                }
            return response || $q.when(response);
        },
        responseError: function(response){
             if((--numLoading)){
                $rootScope.$broadcast("loader_hide");
                }
            $rootScope.$broadcast("authentication-failed");
            return $q.reject(response);
        }
    };
});
        