const _ = require("lodash");

exports.getBlogCount = async (blogs) => {   
    return _.size(blogs);       
};