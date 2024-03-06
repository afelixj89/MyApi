## Product API Documentation

Welcome to the Product API documentation. This API provides information about various products available in different categories including smartphones, laptops, fragrances, skincare products, groceries, and home decoration items. Each product is described with details such as title, description, price, discount percentage, rating, stock availability, brand, category, and images.

### Base URL

```
http://localhost:3000/products

```

### Endpoints

- **GET /products**: Retrieve all products.
- **GET /products/{id}**: Retrieve a specific product by its ID.

### Authentication

Authentication is not required to access the endpoints. However, rate limits may apply to prevent abuse of the service.

### Response Format

The API responds with JSON objects containing details about the products. Each product object includes the following fields:

- **id**: Unique identifier for the product.
- **title**: Name of the product.
- **description**: Brief description of the product.
- **price**: Price of the product.
- **discountPercentage**: Discount percentage applied to the product.
- **rating**: Average rating of the product.
- **stock**: Available stock of the product.
- **brand**: Brand of the product.
- **category**: Category of the product.
- **thumbnail**: URL of the thumbnail image for the product.
- **images**: Array of URLs for additional images of the product.

### Example

```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  "images": [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
  ]
}


---

## Installation

To get started with this project, make sure you have Node.js and npm installed on your machine.

1. **Clone this repository to your local machine.**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the root directory of the project in your terminal.**
   ```bash
   cd <project_directory>
   ```

3. **Install all dependencies listed in the `package.json` file.**
   ```bash
   npm install
   ```

**Note:** Ensure that you have all the dependencies listed in the `package.json` file installed and correctly configured before running the project.

--- 
