const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.json());
app.use('/data', require('./Routes/pages'));


app.listen(PORT, ()=>{
    console.log(`le server est allumé au port ${PORT}`);
})