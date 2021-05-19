require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT !! 3000;

app.get('/', (req, res) => {

 res.send('Hello World!')

})

app.use(express.json())
app.use(routes)

app.listen(port, () => {
 console.log(`Example app listening at localhost:${port}`)

})

