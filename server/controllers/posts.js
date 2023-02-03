const Post = require("../models/Post");

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
          .sort({ createdAt: -1 })
          .limit(6);
        res.status(200).json(posts);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
}

const createPost = async (req, res) => {
  const  { author, post, attached } = req.body.body;

    const savedPost = new Post({
      author: {
            id: author.id, 
            author: author.author,
            image: author.image
        },
        post: post,
        attached: attached
    })

    console.log(savedPost);

    try {
        await savedPost.save();
        res.status(201).json(savedPost);
      } catch (error) {
        res.status(409).json({ message: error.message });
      }

};

module.exports = { createPost, getPosts };