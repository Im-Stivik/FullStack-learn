const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


const accountsRoute = require('./controller/accaunts');
app.use('/api/accounts', accountsRoute)

const port = 5090;
app.listen(port, function(){
    console.log(`server is runing via port ${port}`)
});