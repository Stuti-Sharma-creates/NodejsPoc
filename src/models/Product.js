const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    instock: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true,
        min:1
      
    }
})

module.exports = Product