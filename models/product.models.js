import mongoose from 'mongoose'
const ProductSchema=mongoose.Schema({
    name:{type:String,
        required:[true,"Please Enter product Name"]

    },
    description: {
        type: String,
        required: false

    },
     quantity: {
        type: Number,
        required: true,
        default:0

    },
    price: {
        type: Number,
        required: true,
        default: 0

    },
    image: {
        type: Number,
        required: false,
    },  
   


}, { timestamps: true })
const Product = mongoose.model('Product', ProductSchema)
export default Product;
