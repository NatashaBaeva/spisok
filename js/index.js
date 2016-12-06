angular.module("App", ['rzModule'])
    .controller("Students", function ($scope, $http) {
        $scope.items = [{
            id: undefined,
            label: 'Without group'
        }, {
            id: 123,
            label: '123'
        }, {
            id: 124,
            label: '124'
        }, {
            id: 125,
            label: '125'
        }, {
            id: 126,
            label: '126'
        }];
        $http.get("http://192.168.3.36:3000/solutions").then(function(res)
              {$scope.solutions = res.data;
                for(i=0; i<$scope.solutions.length; i++)
                {
                  var a = $scope.solutions[i].ip;
                  var b = a[a.length-1].split('.');
                  var d = b[b.length-1];
                  $scope.solutions[i].num = d;
                }
              });
        $scope.priceSlider = 15;
        $scope.activeSol = {};
        /*  $scope.solutions = [{"username":"sa","code":"dasda","ip":["::ffff:192.168.3.36"],"rating":15, "num":""},
         {"username":"чигинцевалв","code":"using System;\r\nusing System.Collections.;\r\ Convert.ToInt32(a);\r\n  c = a - bй\eadKey();\r\n","ip":["::ffff:192.168.3.8"],"rating":15, "num":""},
         {"username":"мезенцевасд","code":"static void DoubleToMoney(double value)\r\n  {\r\n DoubleToMoney(54.45);","ip":["::ffff:192.168.3.3"],"rating":3, "num":""},
         {"username":"ЧечушковИС","code":"яется изображением\");\r\n Console.ReadKey();","ip":["::ffff:192.168.3.17"], "num":""}];*/
        $scope.chooseUser = function (user) {
            $scope.activeSol = user;
        };
        $scope.options = {floor: 0, ceil: 15};
        $scope.setRating = function () {
            $scope.activeSol.rating = $scope.priceSlider;
            $scope.activeSol.num = d;
            $http.post("http://192.168.3.36:3000/save", {
                username: $scope.activeSol.username,
                rating: $scope.priceSlider, num: $scope.num
            }).then(function (res) {
            });
        };
        $scope.Add = function () {
            $http.post("http://192.168.3.36:3000/save", {
                username: $scope.activeSol.username,
                group: $scope.activeSol.group.id
            }).then(function (res) {});
        }

    });
