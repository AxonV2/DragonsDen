//ngAnimate inclusion
var module = angular.module("angularCart", ['ngAnimate']);

module.run(function($rootScope){
    $rootScope.title = "The Dragon's Den"
})

//In case you dont have the database
//these methods are available for testing
module.factory("cartService", function($rootScope) {
	var cart = [{
        id: 0,
        img: 'jordans.png',
        name:'Air Jordans',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        price: 100,
        color:'Red and White',
        size:'35 - 50',
        status:'Available',
        category:'Shoes',
        quantity:2
    }];
	
	return {
        getCart: function() 
        {
			return cart;
        }
	}
});

module.factory("itemGetter", function() {
	var itemList = [
        {
            id: 0,
            img: 'jordans.png',
            name:'Air Jordans',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 100,
            color:'Red and White',
            size:'35 - 50',
            status:'Available',
            category:'Shoes'
        },
        {
            id: 1,
            img: 'gucci.png',
            name:'Gucci Flip Flops',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 101,
            color:'Black',
            size:'35 - 50',
            status:'Available',
            category:'Shoes'
        },
        {
            id: 2,
            img: 'black.png',
            name:'Black t-shirt',
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' 
            +'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 102,
            color:'Black',
            size:'S/M/L',
            status:'Available',
            category:'Shirts'
        },
        {
            id: 3,
            img: 'blue.png',
            name: 'Blue t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 103,
            color: 'Blue',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'

        },
        {
            id: 4,
            img: 'red.png',
            name: 'Red t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 104,
            color: 'Red',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 5,
            img: 'purple.png',
            name: 'Purple t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 105,
            color: 'Purple',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 6,
            img: 'green.png',
            name: 'Green t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 106,
            color: 'Green',
            size: 'S/M/L',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 7,
            img: 'grey.png',
            name: 'Grey t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 107,
            color: 'Grey',
            size: 'S/M/L',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 8,
            img: 'pants.png',
            name: 'Men\'s Pants',
            desc: 'Small Text Test',
            price: 108,
            color: 'Black',
            size: '30 - 50 Waist',
            status: 'Available',
            category:'Pants'
        },
        {
            id: 9,
            img: 'navy.png',
            name: 'Navy t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 109,
            color: 'Navy',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 10,
            img: 'orange.png',
            name: 'Orange t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 110,
            color: 'Orange',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 11,
            img: 'white.png',
            name: 'White t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 111,
            color: 'White',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 12,
            img: 'marron.png',
            name: 'Marron t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 112,
            color: 'Marron',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        },
        {
            id: 13,
            img: 'pink.png',
            name: 'Pink t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 113,
            color: 'Pink',
            size: 'S/M/L/XL',
            status: 'Available',
            category:'Shirts'
        }
    ];
	
	return {
        getitemList: function() 
        {
			return itemList;
        }
	}
});

module.controller("cartController", function($scope, $http, cartService) 
{
    $scope.cart = []
    $scope.shipping = 15
    $scope.subtotal = 0
    $scope.total = 0
    
    $http.get('phps/getCart.php').then(function(data)
    {
        try
        {
            for(let pos = 0; pos < data.data.length; pos++)
            {
                const id = data.data[pos].id
                const img= data.data[pos].img
                const name= data.data[pos].name
                const desc = data.data[pos].description
                const price= data.data[pos].price
                const color= data.data[pos].color
                const size= data.data[pos].size
                const category = data.data[pos].category
                const quantity = data.data[pos].quantity
                     
                $scope.cart.push({id, img, name, desc, price, color, size, category, quantity })
                $scope.subtotal += (price * quantity)
                $scope.shipping += 5
                console.log(data.data[pos])
            }
        }
        catch(err)
        {
            console.log(err)
            
            //Not tested
            $scope.cart = cartService.getCart();
            $scope.subtotal += ($scope.cart[0].price * $scope.cart[0].quantity)
            $scope.shipping += (5 * $scope.cart.length)

        }

    }).then(function(){
        $scope.total = $scope.subtotal + $scope.shipping
    });


    $scope.recalculateValues = function(){
        cart = $scope.cart
        $scope.shipping = 15.00
        $scope.subtotal = 0

        for(let pos = 0; pos < cart.length; pos++)
        {
            $scope.subtotal += (cart[pos].price * cart[pos].quantity)
            $scope.shipping += 5
        }

        $scope.total = $scope.subtotal + $scope.shipping
    }

    $scope.removeFromCart = function(item){
        //console.log($scope.cart.indexOf(item))
        
        itemIndex = $scope.cart.indexOf(item)
        $scope.cart.splice(itemIndex, 1)
        
        
        $http
        ({
            method:"POST",
            url:"phps/removeFromCart.php",
            data:item
        })
        
        $scope.recalculateValues()
        //console.log(item)
    }

    $scope.quantityDown = function(item){

        itemIndex = $scope.cart.indexOf(item)
        quantity = $scope.cart[itemIndex].quantity 

        if(quantity != 1)
            $scope.cart[itemIndex].quantity = parseFloat($scope.cart[itemIndex].quantity) - 1
    
        $scope.recalculateValues()

        $http
        ({
            method:"POST",
            url:"phps/updateQuantity.php",
            data:item
        })

        //console.log(item)

    }

    $scope.quantityUp = function(item){
        itemIndex = $scope.cart.indexOf(item)
        $scope.cart[itemIndex].quantity = parseFloat($scope.cart[itemIndex].quantity) + 1
        
        $scope.recalculateValues()

        $http
        ({
            method:"POST",
            url:"phps/updateQuantity.php",
            data:item
        })

    }

    $scope.Checkout = function(){

        $http
        ({
            method:"POST",
            url:"phps/cartCheckout.php",
        })

        Swal.fire({
            icon:'success',
            title: 'Checkout Sucessful',
            text: 'Thank you for using our store',
            showConfirmButton: true,
            width: 500,
            timer: 2000
        }).then(function()
        {
              window.location = "index.html";
        })
    }

});

module.controller("itemController", function($scope, $http, itemGetter, cartService) {

    $scope.itemCategories = ['Show all', 'Shirts', 'Shoes', 'Pants', 'Jackets']
    
    $scope.itemList = []

    //buscar dados da BD
    $http.get('phps/data.php').then(function(data)
    {
        try
        {
            for(let pos = 0; pos < data.data.length; pos++)
            {
                const id = data.data[pos].id
                const img= data.data[pos].img
                const name= data.data[pos].name
                const desc = data.data[pos].description
                const price= data.data[pos].price
                const color= data.data[pos].color
                const size= data.data[pos].size
    
                const status = (data.data[pos].status == 1? 'Available' : 'Out of Stock')
                //console.log(status)
    
    
                const category = $scope.itemCategories[data.data[pos].category].toString()
                //console.log(category)
                     
                $scope.itemList.push({id, img, name, desc, price, color, size, status, category })
                //$scope.itemList.push(data.data[i])
                //console.log(data.data[i])
            }
        }
        catch(err)
        {
            console.log(err)

            //Not tested
            $scope.itemList = itemGetter.getitemList()
        }
    });

    //console.log($scope.itemList)

    $scope.addToCart = function(product){

        if(product.status == "Out of Stock")
        {
            Swal.fire({
                icon: 'error',
                title: 'Sorry!',
                text: 'This item is currently out of stock, please check back later!',
                showConfirmButton: false,
                width: 500,
                timer: 2000
                })
        }
        else
        {
            //PHP para adicionar a table Cart
            $http
            ({
                method:"POST",
                url:"phps/addToCart.php",
                data:product
            })

            Swal.fire({
                icon:'success',
                title: 'Product added to Cart!',
                text: product.name + ' was added to your shopping cart',
                showConfirmButton: true,
                width: 500,
                timer: 2000
            }) 
        };
    }
          
    //Filter
    $scope.filterBy = function(param)
    {
        if(param.toLowerCase() =="show all")
            $scope.search = ""
        else
            $scope.search=param;
    }
    
});
