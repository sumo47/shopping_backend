const express = require("express")
const routes = require('./routes/route')
const app = express()


const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sumit:sumit@cluster0.8dflsuw.mongodb.net/shopping")
    .then(() => { console.log("Mongodb connected successful") })
    .catch((err) => { console.log(err) })

app.use(express.json())
app.use("/",routes)

const port = 5000 || process.env.port

app.listen(port, () => { console.log(`Server running on port ,${port}`) })