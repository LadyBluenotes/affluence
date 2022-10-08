const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const logger = require('morgan');
const connectDB = require('./config/database');
const cors = require('cors');

require('dotenv').config({path: './config/.env'});

const userRoutes = require('./routes/user.routes');
const transactionRoutes = require('./routes/transaction.routes');

app.use(express.static("public"));

// app.use(flash());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) =>  {
  console.log(req.path, req.method);
  next();
});
app.use(logger('dev'));
app.use(cors());

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
  })
);

//Routes
app.use('/', userRoutes);
app.use('/:id/transactions', transactionRoutes)

//Connect to DB
connectDB();

// Listen for requests
app.listen(process.env.PORT || 8000, ()=>{
  console.log(`Server is running`);
});  