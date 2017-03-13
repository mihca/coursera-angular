(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {

        var controller = this;

        controller.everythingBought = function () {
            return ShoppingListCheckOffService.getItemsToBuy().length === 0;
        }

        controller.buyItem = function buyItem (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex)
        }

        controller.getItemsToBuy = function () {
            return ShoppingListCheckOffService.getItemsToBuy();
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController (ShoppingListCheckOffService) {

        var controller = this;

        controller.nothingBought = function () {
            return ShoppingListCheckOffService.getItemsAlreadyBought().length === 0;
        }

        controller.getItemsAlreadyBought = function () {
            return ShoppingListCheckOffService.getItemsAlreadyBought();
        }
    }

    function ShoppingListCheckOffService () {
        var service = this;

        var itemsToBuy = [
            {
                name: "Cookies",
                quantity: 10
            },
            {
                name: "Cheese",
                quantity: 2
            },
            {
                name: "Bread",
                quantity: 1
            },
            {
                name: "Milk",
                quantity: 1
            }
        ];

        var itemsAlreadyBought = [];

        service.buyItem = function (itemIndex) {
            itemsAlreadyBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function () {
            return itemsAlreadyBought;
        };
    }

})();
