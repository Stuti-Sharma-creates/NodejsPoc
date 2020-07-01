const express = require('express')
require('./db/my_mongoose')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(productRouter)
app.use(orderRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})