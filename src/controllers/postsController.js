import postModel from "../models/postModel.js";

export const postsController = {
  // GET /
  index(req, res) {
    const posts = postModel.getAllPosts();
    res.render("index", { posts });
  },

  // GET /post/:id
  show(req, res) {
    const id = req.params.id
    const post = postModel.getPostById(id);
    res.render("post", { post });
  },
};
