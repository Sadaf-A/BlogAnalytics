const express = require('express');
const BlogStatsService = require('./service/BlogStatsService');
const BlogAnalyticsService = require('./service/BlogAnalyticsService');
const app = express();

app.get("/api/blog-stats", async (req, res) => {
    const response = await BlogStatsService.getBlogData();
    console.log(response.data.blogs);
    const count = BlogAnalyticsService.getBlogCount(response.data.blogs);
    console.log(count);
    res.send("ok");
})

app.listen(8000, () => {console.log("server running on port 8000")});