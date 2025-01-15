const express = require('express');
const {
    getAllBooks,
    getSingleBook,
    updateBooks,
    deleteAllbook,
    putBooks
} = require('../controllers/book-controller')
//Create express router
const router = express.Router(); //same  as app =express()

//all the router related to books

router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBook);
router.post('/add',putBooks);
router.put('/update/:id',updateBooks);
router.delete('/delete/:id',deleteAllbook);

module.exports = router;