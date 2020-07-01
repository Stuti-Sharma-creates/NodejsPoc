# NodejsPoc
This is a demo shopping system query handling node js project

## Libraries 
 #### express, mongoose, mongodb, bcryptjs, jsonwebtoken

## Steps to run the application 

#### npm install
#### npm run dev


### Structure 

src
 
   db-my_mongoose.js: database connectivity
   
index.js-->entry point to application
   
models--> mongoose models and schemas
  
  User

  Product

  Order :- has a reference field from user

middleware --two authentication functions

Authenticate--> to check logged in user
              Authpro--> to make sure only admin alters product collection
              
  routes--> all different requests routes to handle all queries
            user 
            product
            order
