
const book = require('../models/Book');
// Create contoller for allbook routes
const getAllBooks = async(req,res)=>{
    try{
    const getBooks = await book.find({});
    if(getBooks?.length > 0){
        res.status(200).json(
            {
                sucess : true,
                message : "books found",
                data : getBooks
            }
        )
    }else{
        res.status(404).json(
            {
                sucess : false,
                message : "books are not available"
            }
        )
    }   
    }catch(e){
        console.log(e);
        
    }
}
const getSingleBook = async(req,res)=>{
    try{
        const getCurrentBookId  =req.params.id;
        const getBooksId = await book.findById(getCurrentBookId);
        if(getBooksId){
            res.status(200).json(
                {
                    sucess  :true,
                    message : "book with id found",
                    data : getBooksId
                }
            )
        }else{
            res.status(404).json(
                {
                    sucess : false,
                    message : "book can't be found"
                }
            )
        }
    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                message : "something went wrong"
            }
        )
        

    }
}
const updateBooks = async(req,res)=>{
    try{
        const updateByid = req.params.id
        const updateBody  =req.body;
        const updatefind = await book.findByIdAndUpdate(updateByid,updateBody,{new :true});

        if(!updatefind){
            res.status(404).json({
                sucess : false,
                message : "book with this id can't be found"
            })
        }else{
            res.status(200).json(
                {
                    sucess :true,
                    message : "book updated",
                    data : updatefind
                }
            )
        }

    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                message : "something went wrong"
            }
        )
        
    }

}
const deleteAllbook = async(req,res)=>{
    try{
        const bookTobeDeleted = req.params.id;
        const deleted  = await book.findByIdAndDelete(bookTobeDeleted);
        if(!deleted){
            res.status(404).json(
                {
                    sucess:false,
                    message : "book cannot be deleted check your id"
                }
            )
        }else{
            res.status(200).json(
                {
                    sucess : true,
                    messsage : "book deleted sucessfully",
                    data : deleted
                }
            )
        }
    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                message : "something went wrong"
            }
        )
        
    }

}
const putBooks = async(req,res)=>{
    try{
        // get books data
        const newBookFromData = req.body;
        const newlyCreatedBook = await book.create(newBookFromData);
        if(newlyCreatedBook){
            res.status(201).json({
                success : true,
                message : "Book added sucessfully",
                data : newlyCreatedBook
            })
        }
    }catch(e){
        console.log(e);
        res.status(500).json(
            {
                message : "something went wrong"
            }
        )
        
    }
}
module.exports = {getAllBooks,getSingleBook,updateBooks,deleteAllbook,putBooks};