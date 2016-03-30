namespace MyCarShopApp {

    angular.module("MyCarShopApp", ["ngRoute", "ngResource", "ui.bootstrap"]).config((
        $routeProvider: ng.route.IRouteProvider,
        $locationProvider: ng.ILocationProvider) => {

        $routeProvider
            .when("/", {
                templateUrl: '/ngApp/views/list.html',
                controller: MyCarShopApp.Controllers.CarListController,
                controllerAs: 'vm'
            })
            .when("/add", {
                templateUrl: '/ngApp/views/add.html',
                controller: MyCarShopApp.Controllers.CarAddController,
                controllerAs: 'vm'
            })
            .otherwise('/');





        $locationProvider.html5Mode(true);

    });

    
}