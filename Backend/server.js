const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middileware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);


const PORT = 8006;
const DB_URL = 'mongodb+srv://yuchira1:yuchira1999@clusteryja.wbn3u.mongodb.net/mernCurd?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DN Connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});