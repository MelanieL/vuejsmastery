// new Vue creates a new view instance, which is the root of a Vue.js app
var app = new Vue({
    // Pass an options object into it
    // Relationship between instance and DOM, use property el
    el: '#app',
    // Can put data into it
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        // description: 'They go on your feet.',
        // Removed image: to replace with selectedVariant
        // image: './assets/vmSocks-green.jpg',
        selectedVariant: 0,
        // link: 'https://en.wikipedia.org/wiki/Socks_(disambiguation)',
        // Removed instock to turn it into a computed property so it pulls from the variants for quantities instead
        // inStock: false,
        // if above is false, styles will activate to gray out add to cart button
        // inventory: 0,
        // onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage:"./assets/vmSocks-green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.jpg",
                variantQuantity: 0                
            }
        ],
        sizes: ["S", "M", "L", "XL"],
        cart: 0,
        onSale: true
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
            // updateProduct: function (variantImage) {
            updateProduct(index) {
                // this.image = variantImage
                this.selectedVariant = index
                console.log(index)
            }
        },
    // Computed properties are cached (results are saved until they are changed). These are calculations.
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' On Sale!'
            }
            else {
                return this.brand + ' ' + this.product + ' Not on Sale.'
            }
        }

    }
    
})

