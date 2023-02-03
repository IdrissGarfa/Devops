const mongoose = require("mongoose");


const postSchema = mongoose.Schema(
  {
    author: {
      id: {
        type: String
      },
      author: {
        type: String
      },
      image: {
        type: String
      }
    }, 
    post: {
      type: String
    },
    attached: {
      type: String
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
