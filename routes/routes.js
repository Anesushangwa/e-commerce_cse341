const express = require('express');
const router = express.Router();

const ecommerceController = require('../controller/products');

router.get('/',ecommerceController );

router.get('/:id', );

//Post Method
router.post('/', )

router.put('/:id', );

router.delete('/:id', );


module.exports = router;