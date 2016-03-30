var MyCarShopApp;
(function (MyCarShopApp) {
    var Controllers;
    (function (Controllers) {
        var CarListController = (function () {
            function CarListController($http, $modal) {
                var _this = this;
                this.$http = $http;
                this.$modal = $modal;
                this.$http.get('api/makes/')
                    .then(function (response) {
                    _this.makesDetails = response.data;
                })
                    .catch(function (error) {
                    console.log(error);
                });
            }
            ;
            CarListController.prototype.showCarDetailsModal = function (carDetails) {
                this.$modal.open({
                    templateUrl: 'ngApp/modals/carDetailsModal.html',
                    controller: MyCarShopApp.Controllers.CarModalController,
                    controllerAs: 'vm',
                    resolve: {
                        data: function () { return carDetails; }
                    },
                    size: 'sm'
                });
            };
            CarListController.prototype.showCarsByModel = function () {
                var _this = this;
                //console.log(this.selectedMakeDetails);
                this.$http.get('api/cars/')
                    .then(function (response) {
                    _this.carsDetails = response.data;
                    console.log(_this.carsDetails);
                })
                    .catch(function (error) {
                    console.log(error);
                });
            };
            CarListController.prototype.fetch = function () {
                var _this = this;
                if (this.searchPhrase) {
                    this.$http.get('api/cars/')
                        .then(function (response) {
                        _this.searchResults = response.data;
                    });
                }
                else {
                    this.searchResults = "";
                }
            };
            return CarListController;
        })();
        Controllers.CarListController = CarListController;
        var CarAddController = (function () {
            function CarAddController() {
            }
            return CarAddController;
        })();
        Controllers.CarAddController = CarAddController;
        var CarModalController = (function () {
            function CarModalController(data, $modalInstance) {
                this.data = data;
                this.$modalInstance = $modalInstance;
            }
            CarModalController.prototype.closeModal = function () {
                this.$modalInstance.close();
            };
            return CarModalController;
        })();
        Controllers.CarModalController = CarModalController;
    })(Controllers = MyCarShopApp.Controllers || (MyCarShopApp.Controllers = {}));
})(MyCarShopApp || (MyCarShopApp = {}));
//# sourceMappingURL=CarControllers.js.map