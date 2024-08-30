const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const { request_gpu } = require('../controllers/gpuControllers')


const router = express.Router()

// router.route('/').post(protect, sendMessage)
router.route('/api/request').post(request_gpu)
// router.route('/:communityId').get(protect ,allMessages)  

module.exports = router