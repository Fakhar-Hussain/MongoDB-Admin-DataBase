require("./DB");
const express = require('express');
const morgan = require('morgan');
const PostRouter  = require('./Routers/route');

const app = express();

app.use(morgan('dev'));
app.use(express.json())
app.use('/post', PostRouter)

require('dotenv').config();
const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log('Port is Listining on ' + PORT )
})