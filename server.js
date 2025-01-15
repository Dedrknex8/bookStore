require('dotenv').config()
const express = require('express');
const connectionToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes')


const app = express();
const PORT=process.env.PORT || 2929;

//connect it to our database
connectionToDB();

//middleware parse JSON
app.use(express.json());

//routes here
app.use('/api/books',bookRoutes);

//Start listning to the server
app.listen(PORT,()=>{
    console.log(`Sever is now running on port ${PORT}`)
});
