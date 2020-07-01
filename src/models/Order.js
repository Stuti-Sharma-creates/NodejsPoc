const mongoose = require('mongoose')

const Order = mongoose.model('Order', {
   
    products: [{
        prod: {
            type: String,
            required: true
        }
    }],
   
    placed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Order