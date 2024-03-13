const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


const data = require('./assets/initial-data.json')

app.use(express.json());
app.use('/data', require('./Routes/pages'));
app.use('/auth', require('./Routes/auth'));


app.listen(PORT, ()=>{
    console.log(`le server est allumé au port ${PORT}`);
})