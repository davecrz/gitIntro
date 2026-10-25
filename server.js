const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('middlerWareLab');
});

app.listen(PORT, () => {
    console.log(`Server Running: ${PORT}`);
});