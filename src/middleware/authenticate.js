const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Order=require('../models/Order')




const authenticate= async (req, res, next)=>
{
    try {
        console.log("hello in function")
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            console.log('not suh user')
            throw new Error()
        }

        req.user = user
        req.token=token
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}


module.exports=authenticate