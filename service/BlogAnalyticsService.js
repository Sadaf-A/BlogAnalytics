const _ = require("lodash");
const BlogStatsService = require("./BlogStatsService");

exports.fetchAndAnalyzeBlogs = async () => {

    const response = await BlogStatsService.getBlogData();

    const blogs = response.data.blogs;
    
    const size = blogs.length;
    
    const blogWithLongestTitle = _.maxBy(blogs, (blog) => blog.title.length);
    
    const blogsWithPrivacy = _.filter(blogs, (blog) => /privacy/i.test(blog.title));
    const numberOfBlogsWithPrivacy = blogsWithPrivacy.length;

    const uniqueBlogTitles = _.uniqBy(blogs, 'title').map(blog => blog.title);

    return {
        size: size,
        longestTitle: blogWithLongestTitle,
        blogs_with_privacy: numberOfBlogsWithPrivacy,
        unique_title: uniqueBlogTitles
    };
};

const memoizedFetchAndAnalyzeBlogs = _.memoize(this.fetchAndAnalyzeBlogs, (blogs) => blogs.length, 60000);

exports.getBlogAnalytics = async (blogs) => {
    return memoizedFetchAndAnalyzeBlogs(blogs);
};
