(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService)
    
    ////////////////////////////////////////////////
    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
    var toBuylist = this;

    toBuylist.items=ShoppingListCheckOffService.getToBuyItems();

    toBuylist.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
    }   
    
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBougthList = this;

    alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

    }
    function ShoppingListCheckOffService() {
        var service = this;  

        var toBuyItems = [
        {name: "cookies", quantity: 3} ,
        {name: "green tea", quantity: 8 },
        {name: "salt", quantity: 1 },
        {name: "chips", quantity: 5 },
        {name: "apple", quantity: 4 }
            ];
        var alreadyBougthList = [];
        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex]
            alreadyBougthList.push(item);
            toBuyItems.splice(itemIndex,1)
        };

    service.getToBuyItems = function(){
        return toBuyItems;
    }
    service.getAlreadyBoughtItems = function(){
        return alreadyBougthList;
    }
    }


    
    })();
    