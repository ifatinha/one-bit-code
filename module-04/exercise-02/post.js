const Comment = require("./comment");

class Post {

    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.comments = [];
        this.publicationDate = new Date();
    }

    addComment(username, content) {
        return this.comments.push(new Comment(username, content));
    }
}

module.exports = Post;