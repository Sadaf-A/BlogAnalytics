const _ = require("lodash");

exports.getSearchResults = async (query) => {   
    const response = BlogStatsService.getBlogData();

    const blogs = response.data.blogs;

    const caseInsensitiveQueryRegex = new RegExp(query, 'i');
    
    const blogsWithQuery = _.filter(blogs, (blog) => caseInsensitiveQueryRegex.test(blog.title));
   
    return blogsWithQuery;
};