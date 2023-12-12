const express = require('express');
const { index, detail } = require('../controllers/indexController');
const router = express.Router();

/* / */

router
    .get('/',index)
    .get('/detail/:id',detail)

module.exports= router;