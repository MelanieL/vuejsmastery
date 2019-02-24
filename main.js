// new Vue creates a new view instance, which is the root of a Vue.js app
var app = new Vue({
    // Pass an options object into it
    // Relationship between instance and DOM, use property el
    el: '#app',
    // Can put data into it
    data: {
        product: 'Socks',
        // description: 'They go on your feet.',
        image: './assets/vmSocks-green.jpg',
        // link: 'https://en.wikipedia.org/wiki/Socks_(disambiguation)',
        inStock: false,
        // if above is false, styles will activate to gray out add to cart button
        inventory: 0,
        // onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:"./assets/vmSocks-green.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg"                
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0
        },
    methods: {
            // Can also write functions in ES6 shorthand, ie addToCart() {} instead
            addToCart: function () {
                this.cart += 1
            },
            // Using ES6 shorthand for the challenge ex
            // Also added the if statement to prevent the cart from going below zero
            removeFromCart() {
                if(this.cart > 0){
                this.cart -= 1
                }
            },
            updateProduct: function (variantImage) {
                this.image = variantImage
            }
        }
    
})

