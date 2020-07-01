const express = require('express')
const Product = require('../models/Product')

const authpro = require('../middleware/authpro')
const router = new express.Router()

router.post('/products', authpro,async (req, res) => {
    const product = new Product(req.body)

    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})// adding a new product

router.get('/products', async (req, res) => {
    try {
        const product = await Product.find({})
        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})// getting all products

router.get('/products/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const product = await Product.findById(_id)

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})//finding a product by it's id

/*router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})*/

router.delete('/products/:id',authpro,async (req, res) => {
    try {
        const pro = await Product.findByIdAndDelete(req.params.id)

        if (!pro) {
            res.status(404).send()
        }

        res.send(pro)
    } catch (e) {
        res.status(500).send()
    }
})  // we can only allow admins to update a product

module.exports=router