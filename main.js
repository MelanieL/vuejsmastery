// new Vue creates a new view instance, which is the root of a Vue.js app
var app = new Vue({
    // Pass an options object into it
    // Relationship between instance and DOM, use property el
    el: '#app',
    // Can put data into it
    data: {
        product: 'Socks',
        description: 'Fancy foot warming fashion.'
    }
})

