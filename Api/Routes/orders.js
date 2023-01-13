
const express = require ('express');
const router = express.Router();


router.get('/',(req,res,next)=>{

	res.status(200).json({
		message:'fetching all orders',
		status: 200,
	})

})
//using body parser to extract id name and quantity from request then using the extracted data to create and object 
router.post('/',(req,res,next)=>{
		const order ={
		id:req.body.id,
		name:req.body.name,
		quantity:req.body.quantity
		}

	res.status(201).json({
		message:'A new Order was created',
		status: 200,
		newOrder:order
	})

})
router.get('/:orderId',(req,res,next)=>{
	const id = req.params.orderId
	res.status(200).json({
		message:`Details for Order ${id}`,
		status: 200,
	})

})
router.delete('/:orderId',(req,res,next)=>{
	const id = req.params.orderId
	res.status(200).json({
		message:`Order ${id} was successfully deleted`,
		status: 200,
	})

})


module.exports = router;