import instance from "./config";

const getPosts = () => {
  return instance.get("/posts");
};
const getPost = (id) => {
  return instance.get(`posts/${id}`);
};
const AddPost = (post) => {
  return instance.post(`/posts`, post);
};

const DeletePost = (id) => {
  return instance.delete(`/posts/${id}`);
};
const UpdatePost = (post) => {
  return instance.put(`/posts/${post.id}`, post);
};

export { getPost, getPosts, AddPost, DeletePost, UpdatePost };
