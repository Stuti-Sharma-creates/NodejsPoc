const mongose = require('mongoose')

 const conn_url="mongodb://localhost:27017/shop-demo-app"
 mongose.connect(conn_url,{useNewUrlParser:true,useCreateIndex:true})

