
import Product from "../models/product.models.js"
import { productValidation, idValidation, getProductsValidation } from '../validations/productValidation.js';
import { handleSuccessResponse, handleErrorResponse } from '../utils/responseHandler.js';
export const saveProducts = async (req, res) => {
    try {
        const { error } = productValidation.validate(req.body);
        if (error) {
            return handleErrorResponse(res, 400, error, error.details[0].message);
        }
        const products = await Product.create(req.body)
        return handleSuccessResponse(res, 201, products, 'Product created successfully');
    } catch (error) {

        return handleErrorResponse(res, 500, error);
    }

}
export const getProducts = async (req, res) => {
    const { error } = getProductsValidation.validate(req.query);
    if (error) {
        return handleErrorResponse(res, 400, error, error.details[0].message);
    }
    try {

        const products = await Product.find({})
        return handleSuccessResponse(res, 200, products, 'Products retrieved successfully');
    } catch (error) {

        return handleErrorResponse(res, 500, error);
    }

}
export const getProductsById = async (req, res) => {
    const { error } = idValidation.validate(req.params);
    if (error) {
        return handleErrorResponse(res, 400, error, error.details[0].message);
    }
    try {
        const { id } = req.params
        const products = await Product.findById(id)
        if (!products) {
            return handleErrorResponse(res, 404, new Error('Product not found'), 'Product not found');
        }
        return handleSuccessResponse(res, 200, products, 'Product retrieved successfully');
    } catch (error) {

        return handleErrorResponse(res, 500, error);
    }

}
export const updateProductsById = async (req, res) => {
    const { error } = idValidation.validate(req.params);
    if (error) {
        return handleErrorResponse(res, 400, error, error.details[0].message);
    }

    try {
        const { id } = req.params
        const products = await Product.findByIdAndUpdate(id, req.body)
        if (!products) {
            return handleErrorResponse(res, 404, new Error('Product not found'), 'Product not found');
        }

        const updatedProducts = await Product.findById(id)
        return handleSuccessResponse(res, 200, updatedProducts, 'Product updated successfully');

    } catch (error) {

        res.status(500).send({ message: "error" + error })
    }

}
export const productDelete =  async (req, res) => {
    const { error } = idValidation.validate(req.params);
    if (error) {
        return handleErrorResponse(res, 400, error, error.details[0].message);
    }

    try {
        const { id } = req.params
        const products = await Product.findByIdAndDelete(id, req.body)

        if (!products) {
            return handleErrorResponse(res, 404, new Error('Product not found'), 'Product not found');
        }

        return handleSuccessResponse(res, 200, { message: "Product deleted successfully" });

    } catch (error) {

        return handleErrorResponse(res, 500, error);
    }

}
