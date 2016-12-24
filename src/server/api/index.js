const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
    res.send('Hello, world!'));

const searchParam = 'search';
router.get('/:' + searchParam, (req, res) =>
    res.send("Hello, world: " + req.params[searchParam]));

module.exports = router;
