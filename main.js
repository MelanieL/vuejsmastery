Vue.config.devtools = true
// Creating a view components, which is basically all the pieces that can be reused. You can have components within components.
Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
            <div class="product">

                <div class="product-image">
                    <img :src="image" />
                </div>
            
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>

                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>

                    <div v-for="(variant, index) in variants"
                        :key="variant.variantId"
                        class="color-box" 
                        :style="{ backgroundColor: variant.variantColor }"
                        @mouseover="updateProduct(index)">
                        </p>
                    </div>

                    <ul>
                        <li v-for="size in sizes">{{ size }}</li>
                    </ul>
                    
                    <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">Add to Cart</button>
                    <button v-on:click="removeFromCart">Remove from Cart</button>

                </div>
            
            </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
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
                    variantImage: "./assets/vmSocks-green.jpg",
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
            onSale: true
        }
    },
    methods: {
        // Can also write functions in ES6 shorthand, ie addToCart() {} instead
        addToCart: function () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        // Using ES6 shorthand for the challenge ex
        // Also added the if statement to prevent the cart from going below zero
        removeFromCart() {
            if (this.cart > 0) {
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

// new Vue creates a new view instance, which is the root of a Vue.js app
var app = new Vue({
    // Pass an options object into it
    // Relationship between instance and DOM, use property el
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})

