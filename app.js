const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')


const mongoose = require('mongoose')

const productsRoutes = require('./Api/Routes/products')
const orderRoutes = require('./Api/Routes/orders')


//morgan used to log request
app.use(morgan('server'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//fixing CORS errors 
app.use((res,req,next)=>{
	res.header("Access-Control-Allow-Origin","http://any-website-i-want-to-use-my-api.com")
	res.header("Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization")
	
	if(req.method ==='OPTIONS'){
		res.header('Access-Control-Allow-Method','PUT','POST','DELETE','PATCH')
		return res.status(200).json({});
	}
	next();
})

//routes/endpoints
app.use('/products',productsRoutes)
app.use('/orders',orderRoutes)

app.use((req,res,next) =>{
const error = new Error('Route Not found')
error.status= 404
next(error)

})

app.use((error,req,res, next)=>{
	res.status(error.status||500);
	res.json({
		error:{
			message:error.message,

		}
	})

})


module.exports =app;