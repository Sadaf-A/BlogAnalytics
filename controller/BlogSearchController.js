const BlogSearchService = require('../service/BlogSearchService');

exports.getSearchResults = async (req, res) => {
    const results = await BlogSearchService.getSearchResults(req.params.query);
    console.log(results);
    res.send("ok");
}