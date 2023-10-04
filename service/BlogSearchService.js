const _ = require("lodash");
const BlogStatsService = require('./BlogStatsService');

exports.getSearchResults = async (query) => {   
    const response = await BlogStatsService.getBlogData();

    const blogs = response.data.blogs;

    const caseInsensitiveQueryRegex = new RegExp(query, 'i');

    const blogsWithQuery = _.filter(blogs, (blog) => caseInsensitiveQueryRegex.test(blog.title));
   
    return blogsWithQuery;
};