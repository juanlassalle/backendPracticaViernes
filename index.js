import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api.js";

const app = express()

import './models/films.js'
import './models/users.js'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/api', router)


app.listen(3000, () => {
    console.log('Puerto en el servidor')
})