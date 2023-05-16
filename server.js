require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.port || 3000;
const {expressjwt} = require('express-jwt');

app.use(express.json());
app.use(morgan('dev'));

mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}));
app.use('/api/character', require('./routes/characterRouter.js'));


app.use ((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    })
});