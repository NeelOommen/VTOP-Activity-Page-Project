const express = require('express');
const app = express();
const port = 5000;

app.use('/images', express.static('images'))

app.listen(port, () => {
    console.log('Now serving images');
});