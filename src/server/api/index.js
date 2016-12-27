const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
    res.send('Hello, world!'));

const searchParam = 'search';
router.get('/:' + searchParam, (req, res) =>
    setTimeout(() => res.json("Parameter value: " + req.params[searchParam]), 2000));

module.exports = router;
