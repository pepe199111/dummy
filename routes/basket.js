const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/basket', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'src', 'pages', 'cart', 'index.html'));
});