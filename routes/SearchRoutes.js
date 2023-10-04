const express = require('express');
const router = express.Router();
const searchController = require('../controller/BlogSearchController');

router.get('/search-blogs/:query', searchController.getSearchResults);

module.exports = router;
