const mongoose = require('mongoose');

const schema = mongoose.Schema({
    user: { type:mongoose.Schema.Types.ObjectId, ref:'user'},
    name: String,
    products: [
        {
            productId: { type:mongoose.Schema.Types.ObjectId, ref:'Product'},
            addedAt: Date
        }
    ]
});

module.exports = mongoose.model('Wishlist', schema);
