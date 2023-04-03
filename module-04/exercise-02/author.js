const Post = require("./post");

class Author {
    constructor(fullName) {
        this.fullName = fullName;
        this.posts = [];
    }

    writePost(title, description) {
        return this.posts.push(new Post(title, description, this));
    }
}

module.exports = Author;