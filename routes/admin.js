const express = require('express')
const router = express.Router()


router.post('/', (req,res) => {
  const { user, password } = req.body;

})
module.exports = router