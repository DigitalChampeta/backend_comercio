
# Local Products Rest API 🚀

A basic REST API using express, node and sequelize.

The requirements are that the API should have the functionality necessary in order to Get, Post, Update (Put/Patch) and Delete.

The basic tables the database has are Products and Brands.

This is the simulation of database contracted for local business. No aspects of front end were required for this project.

## Autor 

- Adriana Martínez https://github.com/DigitalChampeta

## Tech Stack 📌

RDBMS: MySQL

API Platform: Postman / Thunderclient

Server: Node, Express

## Run Locally + Installation 📦️

Clone the project
```bash
  git clone https://github.com/DigitalChampeta/backend_comercio
```
```bash
  cd my-project
```
Installations necessary to run the REST API:
```
  npm install -y
  npm install express sequelize mysql2
  npm install -D nodemon
  npm install --save-d jest
  npm install --save-d supertest
  npm i cors
```

Add Database schema to MySQL:

```
schema.sql
```

Raise the server:

```
npm run dev
```
## Note 💡
```
This REST API uses port 0 and will assign a random available port everytime. 
You may change it to the port of your choosing to facilitate the experience in 
Postman, Thunderclient or similar.
```
# Endpoint: 

## Products

Create a Product URL: /api/products/ Method: POST Description: Create a new product. Request Body: JSON object with product data.

Get All Products URL: /api/products/ Method: GET Description: Retrieve a list of all products.

Get a Product URL: /api/products/:id Method: GET Description: Retrieve a specific product by ID.

Update a Product URL: /api/products/:id Method: PUT Description: Update a specific product by ID. Request Body: JSON object with product data.

Delete a Product URL: /api/products/:id Method: DELETE Description: Delete a specific product by ID.

## Brand

Get All Brands URL: /api/brands/api/brands/
Method: GET Description: Retrieve a list of all brands

Get a Brand URL: /api/brands/:id Method: GET Description: Retrieve a specific brand

Update Brand URL: /api/brands/:id/api/brands/:id Method: PUT Description: Update a specific brand by ID. Request Body: JSON object with brand data.

Delete a Brand URL: /api/brands/:id Method: DELETE Description: Delete a specific brand by ID.

Get Products by Brand URL: /api/brands/:id/products Method: GET Description: Retrieve products associated with a specific brand by ID.

## Tolls

- vscode 
- git 
- github


