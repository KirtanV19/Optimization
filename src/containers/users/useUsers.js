import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/users.slices";

const useUsers = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers({}));
  }, [dispatch]);

  return { loading, data };
};

export default useUsers;
