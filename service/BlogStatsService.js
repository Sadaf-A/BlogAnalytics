const axios = require("axios");

exports.getBlogData = async () => {
        const apiUrl = "https://intent-kit-16.hasura.app/api/rest/blogs";
        const headers = {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
        };
        return await axios.get(apiUrl, { headers });       
    };
