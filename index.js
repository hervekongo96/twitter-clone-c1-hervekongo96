const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use('/', require('./Routes/pages'));
app.use('/', require('./Routes/auth'));


app.listen(PORT, ()=>{
    console.log(`le server est allumé au port ${PORT}`);
})