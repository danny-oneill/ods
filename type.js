var app = angular.module('myApp', []);

app.controller('MyController', function($scope) {
    $scope.getTypeClass = function(type) {
        switch(type) {
            case 'Application':
                return 'type1-bg';
            case 'Report':
                return 'type2-bg';
            case 'Type3':
                return 'type3-bg';
            // Add more cases as needed
            default:
                return 'default-bg';
        }
    };
});
