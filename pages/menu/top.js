define(['angular'], function (angular) {
    return angular.module('app.menu.top', ['ui.bootstrap']).run(function ($rootScope, $http) {
        $http.get('server/menu.json').success(function (ret) {
            console.log(ret);
        });
        $http.get('server/app.json').success(function (ret) {
            $rootScope.appInfo = ret;
        });
        $http.get('server/user.json').success(function (ret) {
            $rootScope.userInfo = ret;
        });
        $http.get('server/menu.top.json').success(function (ret) {
            $rootScope.menuTopInfo = ret;
        });
    });
});