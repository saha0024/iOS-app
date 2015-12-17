angular.module('starter')
    .factory('logService', function (LocalSotrageService) {
    var logId = 0;
        return {
            add: function(log) {
                LocalStorageService.setStorage( logId++, log);
            }

        };
    });
