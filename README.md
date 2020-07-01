# NodejsPoc
This is a demo shopping system query handling node js project
Libraries 
npm install express
npm install mongoose
npm install mongodb
npm install bcryptjs
npm install jsonwebtoken
Structure 
src 
   db-my_mongoose.js: database connctivity
   index.js-->entry point to application
   models--> mongoose models nad schemas
             User
             Product
             Order :- has a referrnce field from user

  middleware--> two aunthentication functions
              Authenticate--> to check logged in user
              Authpro---> to make sure only admin alters product collection
              
  routes--> all different requests routes to handle all queries
            user 
            product
            order
