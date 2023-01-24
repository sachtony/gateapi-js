app.controller('myPrice', function ($scope, $http) {
    $scope.Coin = "SHIB";
    $scope.Price = "0.1";    
    $http.get("index.html").then(function (response) {
        $scope.index = response.data;
    });
});
