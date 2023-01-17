require('dotenv').config()
const http = require('http')
const { default: mongoose } = require('mongoose')
const PORT = process.env.PORT
const MONGO_URI= process.env.MONGO_URI

const app = require('./app')
const server = http.createServer(app)
//database connection
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI)
.then(()=>{
	//listening for request after the database connection is establish
server.listen(PORT)
console.log('DBconnected')
})
.catch((error)=>{
console.log(error)
})

