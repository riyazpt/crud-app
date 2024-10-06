import Joi from 'joi';


const productValidation = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.empty': 'Product name is required.',
        'string.min': 'Product name must be at least 3 characters long.',
    }),
    description: Joi.string().min(3).optional().messages({
        'string.min': 'Product description must be at least 3 characters long.',
    }),
    price: Joi.number().positive().required().messages({
        'number.base': 'Price must be a number.',
        'number.positive': 'Price must be a positive number.',
    }),
    quantity: Joi.number().integer().min(0).required().messages({
        'number.base': 'Stock must be a number.',
        'number.integer': 'Stock must be an integer.',
        'number.min': 'Stock cannot be negative.',
    }),
});


const idValidation = Joi.object({
    id: Joi.string().length(24).hex().required().messages({
        'string.empty': 'Product ID is required.',
        'string.length': 'Product ID must be a valid MongoDB ObjectId.',
        'string.hex': 'Product ID must be a valid hexadecimal string.',
    }),
});


const getProductsValidation = Joi.object({
    search: Joi.string().optional(),
    page: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Page must be a number.',
        'number.integer': 'Page must be an integer.',
        'number.min': 'Page must be at least 1.',
    }),
    pageSize: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Page size must be a number.',
        'number.integer': 'Page size must be an integer.',
        'number.min': 'Page size must be at least 1.',
    }),
});

export { productValidation, idValidation, getProductsValidation };
