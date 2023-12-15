import { useEffect, useState } from "react";
import { CanceledError } from "../../services/api-client";
import postService, { Post } from "../../services/post-service";
import usePosts from "../../hooks/usePosts";

const PostList = () => {
  const { posts, error, isLoading, setPosts, setError, setIsLoading } =
    usePosts();

  const handleDeletePost = (id: number) => {
    const originalPosts = [...posts];
    setPosts(posts.filter((post) => post.id !== id));

    postService.delete(id).catch((err) => {
      setError(err.message);
      setPosts(originalPosts);
    });
  };

  const addPost = () => {
    const originalPost = [...posts];
    const newPost = { id: 0, title: "New Post", body: "Post bost" };
    setPosts([newPost, ...posts]);

    postService
      .create(newPost)
      .then(({ data: savedPost }) => setPosts([savedPost, ...posts]))
      .catch((err) => {
        setError(err.message);
        setPosts(originalPost);
      });
  };

  const handleUpdatePost = (item: Post) => {
    const originalPost = [...posts];
    const newPost = { ...item, title: item.title + "!" };

    setPosts(posts.map((post) => (post.id === item.id ? newPost : post)));

    postService.update(newPost).catch((err) => {
      setError(err.message);
      setPosts(originalPost);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div className="mb-3 d-flex justify-content-between" onClick={addPost}>
        <div></div>
        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <div className="card mb-3" key={post.id}>
            {/* <h5 className="card-header"></h5> */}
            <div className="card-body">
              <h1 className="card-title">{post.title}</h1>
              <p className="card-text">{post.body}</p>
              <div className="card-footer">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-secondary mx-2"
                  onClick={() => handleUpdatePost(post)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
