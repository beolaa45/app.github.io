const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require("express-validator");
const cors = require("cors")
require("dotenv").config();


//import routes 
const  authRouter = require('./routes/auth')
const  userRouter = require('./routes/user')
const  categoryRouter = require('./routes/category')
const  productRouter = require('./routes/product')

//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log("DB conneted"))
.catch(error => console.log(error));

// middleware
app.use(morgan('dev'));
//doc duoc req.body
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
// handle the request are coming from different origin. 
app.use(cors());

//routes middleware
app.use(authRouter);
app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is runing on ${port}`)
})