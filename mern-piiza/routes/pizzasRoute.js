const express = require("express");
const req = require("express/lib/request");
const { models } = require("mongoose");
const Pizza=require('../models/pizzaModels')
const router = express.Router();
router.get("/getallpizzas", async(req,res)=>{
    try{
        const pizzas = await Pizza.find({})
        res.send(pizzas)


    }catch(error){
        return res.status(400).json({message: error});
    }

});

router.post("/addpizza", async(req,res)=>{
    try{
        const pizza = req.body.pizza
        const newpizza = new Pizza({
            name  :pizza.name,
            image : pizza.image,
            varients: ['small', 'medium','large'],
            description : pizza.description,
            category  : pizza.category,
            prices : [pizza.prices]
        })
        await newpizza.save()
        res.send('Pizza Added Successfully')

    }catch(error){
        return res.status(400).json({message: error});
    }

});

router.post("/getpizzabyid", async(req,res)=>{
    const pizzaid = req.body.pizzaid
    console.log(pizzaid)
    try{
       const pizza = await Pizza.findOne({_id : pizzaid})
       res.send(pizza)
       console.log(pizza)

    }catch(error){
        return res.status(400).json({message: error});
    }

});

router.post("/editpizza", async(req,res)=>{
    const editedpizza = req.body.editedpizza
    try{
        const pizza = await Pizza.findOne({_id : editedpizza._id})

        pizza.name = editedpizza.name,
        pizza.description = editedpizza.description,
        pizza.image = editedpizza.image,
        pizza.category = editedpizza.category,
        pizza.prices = [editedpizza.prices]

        await pizza.save()
        res.send('Pizza Details Edited successfully')




    }catch(error){
        return res.status(400).json({message: error});

    }
});
module.exports = router;