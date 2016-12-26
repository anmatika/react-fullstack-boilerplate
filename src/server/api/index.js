const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
    res.send('Hello, world!'));

const searchParam = 'search';
router.get('/:' + searchParam, (req, res) =>
    setTimeout(() => res.json("Hello, world: " + req.params[searchParam]), 3000));

module.exports = router;
