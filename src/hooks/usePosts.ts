import { useState, useEffect } from "react";
import postService, { Post } from "../services/post-service";
import { CanceledError } from "../services/api-client";

const usePosts = () => {
const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { request, cancel } = postService.getAll<Post>();

    request
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return cancel;
  }, []);
    
    return {posts, error, isLoading, setPosts, setError, setIsLoading}
}

export default usePosts;