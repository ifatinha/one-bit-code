const Author = require("./author");

const author = new Author("John Doe");
author.writePost("Title 01", "Description 01");
author.writePost("Title 02", "Description 02");

author.posts[0].addComment("Jane Doe", "Comment 01");
author.posts[0].addComment("Jane Doe", "Comment 02");

console.log(author.posts[0].comments);