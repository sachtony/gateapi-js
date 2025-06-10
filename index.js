app.controller('myPrice', function ($scope, $http) {
    $scope.Servers = "1.1.1.1";
    $scope.Coin = "SHT";
    $scope.Price = "0.1";    
    $http.get("index.html").then(function (response) {
        $scope.index = response.data;
    });
});
