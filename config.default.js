var config = {
    // Your site title (format: page_title - site_title)
    site_title: "SalesHub",

    site_sections: [
        {
            'title': 'Account Manager',
            'description': 'Articles related to Account and Sales',
            'tag': 'sales'
        },
        {
            'title': 'Content',
            'description': 'Articles related to Content and Social Management',
            'tag': 'content'
        },
        {
            'title': 'Development',
            'description': 'Articles related to Development and Design',
            'tag': 'dev'
        }
    ],

    //Application base url
    base: '/',
    
    // Excerpt length (used in search)
    excerpt_length: 400,

    // Path in which to store content (markdown files, etc.)
    content_dir: __dirname + "/content/",

    // Path in which to store uploads (images etc.)
    uploads_dir: __dirname + "/uploads/",


};

// Exports
module.exports = config;
