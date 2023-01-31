import mongoose from "mongoose";

const productCollection="products";

const ProductSchema = new mongoose.Schema({
    title:String,
    description: String,
    code: String,
    price: Number,
    thumbnail: String,
    stock: Number,
    category: String,
    status: Boolean,
    });
    export const ProductModels=mongoose.model(productCollection,ProductSchema)