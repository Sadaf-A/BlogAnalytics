const express = require('express');
const router = express.Router();
const statsController = require('../controller/BlogStatsController');

router.get('/blogs-stats', statsController.getBlogStats);

module.exports = router;
