const express = require("express")
const router =  express.Router()
const { registerUser ,authUser} = require("../controllers/userControllers")
const { protect } = require("../middleware/authMiddleware")

router.post('/api/register',registerUser)
router.post('/api/login',authUser) // Route for /user/login/ post and get
module.exports = router