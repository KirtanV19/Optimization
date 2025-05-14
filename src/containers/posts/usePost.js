import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/slices/posts.slices";

const usePost = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts({}));
  }, [dispatch]);

  return { data, loading };
};

export default usePost;
