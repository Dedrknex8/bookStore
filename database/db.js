const mongoose = require('mongoose');

const connectionToDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://Dedrknex:Dedrknex001@cluster0.zqctj.mongodb.net/");
        console.log('mongo connected sucessfully');   
    }catch(error){
        console.log("MongoDb connection failed",error);
        process.exit(1);
    }
};

module.exports = connectionToDB;