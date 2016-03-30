namespace MyCarShopApp.Controllers {

    export class CarListController {
        public makesDetails;
        public carsDetails;
        public selectedMakeDetails;
        public searchPhrase;
        public searchResults;

        constructor(private $http: ng.IHttpService, private $modal: angular.ui.bootstrap.IModalService) {
            this.$http.get('api/makes/')
                .then((response) => {
                    this.makesDetails = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        public showCarDetailsModal(carDetails) {
            this.$modal.open({
                templateUrl: 'ngApp/modals/carDetailsModal.html',
                controller: MyCarShopApp.Controllers.CarModalController,
                controllerAs: 'vm',
                resolve: {
                    data: () => carDetails
                },
                size: 'sm'
            });
        }

        showCarsByModel() {
        //console.log(this.selectedMakeDetails);
            this.$http.get('api/cars/')
            .then((response) => {
                this.carsDetails = response.data;
                console.log(this.carsDetails);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        fetch() {
            if (this.searchPhrase) {
                this.$http.get('api/cars/')
                    .then((response) => {
                        this.searchResults = response.data;
                    });
            } else {
                this.searchResults = "";
            }
        }

        
    }

    export class CarAddController {
       

            
    }
    
    export class CarModalController {

        constructor(public data, private $modalInstance: angular.ui.bootstrap.IModalServiceInstance) {
        }

        closeModal() {
            this.$modalInstance.close();
        }
    }

}