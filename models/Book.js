const mongoose  =require('mongoose');

const bookSchema = new mongoose.Schema({
    tittle : {
        type : String,
        required : [true, 'Book title is required'],
        trim : true,
        maxLength : [100,"Book length can't be more than 100 characters"]
    },
    author : {
        type : String,
        required : [true, 'Author name is required'],
        trim : true,
        maxLength : [15,"Auth length can't be more than 15 characters"]
    },
    year : {
        type : Number,
        required :[true,'Publication year is required'],
        min: [100,'Year must alteast 100 years'],
        max:[new Date().getFullYear(),"Year can't be in future"]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

//export the schema module
module.exports = mongoose.model('Book',bookSchema);