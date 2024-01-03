require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = require('./app');

app.listen(PORT,()=>{
    console.log(`server is starting at localhost:${PORT}`);
});

