const express = require('express');

const router = express.Router();

// route for all rates
router.get('/', (req, res) => {
    res.json("This will return all rates on the widget based on the chosen base currency.")
})

module.exports = router;