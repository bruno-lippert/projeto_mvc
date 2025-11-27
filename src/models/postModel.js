let posts = [
  {
    id: "1",
    title: "Teste 1",
    content: "content 1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Teste 2",
    content: "content 2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Post { id, title, content, createdAt, updatedAt}

const postModel = {
  getAllPosts() {
    return posts;
  },

  getPostById(id) {
    return posts.find((post) => post.id === id);
  },

  createPost(title, content) {
    const post = {
      id: Date.now.toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return post;
  },

  savePost(post) {
    //unshift adiciona elementos no começo do array
    posts.unshift(post);
  },

  updatePost(id, updatedPost) {
    const index = posts.findIndex((post) => post.id === id);
    posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() };
  },

  deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
  },
};

export default postModel;
