const express = require("express")
const app = express ()
const db = require("./db")

const Pizza = require('./models/pizzaModels')
app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute')

const userRoute = require('./routes/userRoute')

const ordersRoute = require('./routes/ordersRoute')
app.get("/", (req,res) => {
    res.send("Server working");

})
app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
const port = process.env.PORT || 5000;
app.listen(port, ()=> 'Server running on port')