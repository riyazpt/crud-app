/* eslint-disable no-undef */
import mongoose from 'mongoose';
import sinon from 'sinon';
import axios from 'axios';
import app from '../index.js';
import Product from '../models/product.models.js';
import { connectDB } from '../db/db.js';
import { expect } from 'chai';

const BASE_URL = 'http://localhost:3005/api/v1'; // Adjust the port if necessary

describe('Product API', () => {
    before(async () => {
        await connectDB();
    });

    after(async () => {
        await Product.deleteMany({});
        await mongoose.connection.close();
        
    });

    describe('POST /products', () => {
        it('should create a new product', async () => {
            const product = {
                name: 'Shirt',
                quantity: 2,
                price: 1000,
            };
            const response = await axios.post(`${BASE_URL}/products`, product);
            expect(response.status).to.equal(201);
            expect(response.data).to.have.property('status', 'success');
        });
    });

    describe('GET /products', () => {
        it('should get all products', async () => {
            const response = await axios.get(`${BASE_URL}/products`);
            expect(response.status).to.equal(200);
            expect(response.data).to.have.property('status', 'success');
            expect(response.data.data).to.be.an('array');
        });
    });

    describe('GET /products/:id', () => {
        it('should get a product by ID', async () => {
            const product = new Product({
                name: 'Test Product',
                description: 'Test Description',
            });
           const riyaz= await product.save();
          
            const response = await axios.get(`${BASE_URL}/products/${product._id}`);
            expect(response.status).to.equal(200);
            expect(response.data).to.have.property('status', 'success');
            expect(response.data.data).to.have.property('_id', product._id.toString());
        });
    });

    describe('PUT /products/:id', () => {
        it('should update a product by ID', async () => {
            const product = new Product({
                name: 'Test Product',
                description: 'Test Description',
            });
            await product.save();

            const updatedProduct = {
                name: 'Updated Product',
                description: 'Updated Description',
            };
           
            const response = await axios.put(`${BASE_URL}/products/${product._id}`, updatedProduct);
            expect(response.status).to.equal(200);
            expect(response.data).to.have.property('status', 'success');
            expect(response.data.data).to.have.property('name', 'Updated Product');
        });
    });

    describe('DELETE /products/:id', () => {
        it('should delete a product by ID', async () => {
            const product = new Product({
                name: 'Test Product',
                description: 'Test Description',
            });
            await product.save();

            const response = await axios.delete(`${BASE_URL}/products/${product._id}`);
            expect(response.status).to.equal(200);
            expect(response.data).to.have.property('status', 'success');
            expect(response.data.data).to.have.property('message', 'Product deleted successfully');
        });
    });

   
});
