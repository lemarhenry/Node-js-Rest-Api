
const express = require ('express')
const router = express.Router();

router.get('/',(req,res,next )=>{
res.status(200).json({
	message: 'This is your product /GET Request',
	status: 200
})

})
router.post('/',(req,res,next )=>{
	const product = {
		id:req.body.id,
		name: req.body.name,
		price: req.body.price,
		description: req.body.description
	} 
res.status(201).json({
	message: 'New Product was created',
	status: 200,
	newProduct: product
})

})
router.get('/:productId',(req,res,next )=>{
	//extracting the id that was passed by the used
	const id =req.params.productId;
	res.status(200).json({
		message:'testing testing',
		status: 200,
		id:id

	})

	
})
router.patch('/:productId',(req,res,next )=>{
	//using patch request and product id
	res.status(200).json({
		message:'Updated Products using patch method',
		status: 200,
		

	})

	
})
router.delete('/:productId',(req,res,next )=>{
	//using delete http request
	const id = req.params.productId

	res.status(200).json({
		message:`Deleted Product ${id} `,
		status: 200,
		

	})

	
})



module.exports = router;