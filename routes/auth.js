const express = require('express')
const router = express.Router();

// @routes GET api/auth
// @desc   GET login user
// @access Private
router.get('/',
    async (req, res) => {
        try {
            res.send('GET login user')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }
    }
)


module.exports = router;