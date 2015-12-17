angular.module('starter.controllers')
    .controller('storeCtrl', function ($scope,$cordovaGeolocation, $http, $ionicPlatform) {
    
    $scope.stores = [];
    
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      
      // Simple GET request example:
$http({
  method: 'GET',
  url: 'http://api.bestbuy.com/v1/stores(area('+ lat + ',' + long + ', 100000)?format=json&apiKey=8j2zp956acvwx2jaaude2mzh&show=storeId,name'

}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response.data.stores);
    $scope.stores = response.data.stores;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    }, function(err) {
      // error
    });


  var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });


  watch.clearWatch();
});
