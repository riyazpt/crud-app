# CRUD Products API

This is a simple CRUD (Create, Read, Update, Delete) application for managing products. It allows users to add new products, retrieve existing products, update product details, and delete products from the database.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Chai
- Mocha
- Axios

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- MongoDB (either installed locally or using a cloud service)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd crud-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables. Create a `.env` file in the root directory and add the following:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/yourapp
   ```

### Running the Application

To start the application, run:

```bash
npm start
```

## Usage

You can interact with the API using tools like Postman or cURL. Here are the available endpoints:

## API Documentation

### 1. Create a New Product
- **Endpoint:** `POST /api/v1/products`
- **Request Body:**
    ```json
    {
      "name": "Product Name",
      "quantity": 10,
      "price": 100.00
    }
    ```
- **Response:**
    ```json
    {
      "status": "success",
      "data": {
        "_id": "productId",
        "name": "Product Name",
        "quantity": 10,
        "price": 100.00
      }
    }
    ```

### 2. Get All Products
- **Endpoint:** `GET /api/v1/products`
- **Response:**
    ```json
    {
      "status": "success",
      "data": [
        {
          "_id": "productId",
          "name": "Product Name",
          "quantity": 10,
          "price": 100.00
        }
      ]
    }
    ```

### 3. Get a Product by ID
- **Endpoint:** `GET /api/v1/products/:id`
- **Response:**
    ```json
    {
      "status": "success",
      "data": {
        "_id": "productId",
        "name": "Product Name",
        "quantity": 10,
        "price": 100.00
      }
    }
    ```

### 4. Update a Product by ID
- **Endpoint:** `PUT /api/v1/products/:id`
- **Request Body:**
    ```json
    {
      "name": "Updated Product Name",
      "quantity": 20,
      "price": 150.00
    }
    ```
- **Response:**
    ```json
    {
      "status": "success",
      "data": {
        "_id": "productId",
        "name": "Updated Product Name",
        "quantity": 20,
        "price": 150.00
      }
    }
    ```

### 5. Delete a Product by ID
- **Endpoint:** `DELETE /api/v1/products/:id`
- **Response:**
    ```json
    {
      "status": "success",
      "data": {
        "message": "Product deleted successfully"
      }
    }
    ```

## Testing

To run the tests, make sure you have installed the required testing dependencies. Then, execute the following command:

```bash
npm test
```
