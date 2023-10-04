const BlogAnalyticsService = require('../service/BlogAnalyticsService');

exports.getBlogStats = async (req, res) => {
    const results = await BlogAnalyticsService.fetchAndAnalyzeBlogs();
    console.log(results);
    res.send("ok");
}