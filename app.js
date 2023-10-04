const express = require('express');
const BlogAnalyticsService = require('./service/BlogAnalyticsService');
const BlogSearchService = require('./service/BlogSearchService');
const app = express();

app.get("/api/blog-stats", async (_req, res) => {
    const analytics = await BlogAnalyticsService.fetchAndAnalyzeBlogs();
    console.log(analytics);
    res.send("ok");
})

app.get("/api/search-blogs/:query", async (req, res) => {
    const results = await BlogSearchService.getSearchResults(req.params.query);
    console.log(results);
    res.send("ok");
})

app.listen(8000, () => {console.log("server running on port 8000")});