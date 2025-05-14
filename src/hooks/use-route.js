import { useMemo } from "react";
import Users from "../containers/users/Index";
import Posts from "../containers/posts/Index";
import Login from "../containers/auth/Login";
import { URLS } from "../utils/urls";

const useRoute = () => {
  const allRoutes = useMemo(
    () => [
      {
        id: "root",
        path: URLS.INITIAL,
        element: Login,
        isPrivate: true,
      },
      {
        id: "login",
        path: URLS.LOGIN,
        element: Login,
        isPrivate: true,
      },
      {
        id: "users",
        path: URLS.USERS,
        element: Users,
        isPrivate: true,
      },
      {
        id: "posts",
        path: URLS.POSTS,
        element: Posts,
        isPrivate: true,
      },
    ],
    []
  );

  const privateRoutes = useMemo(
    () => allRoutes.filter((route) => route.isPrivate),
    [allRoutes]
  );
  return { allRoutes, privateRoutes };
};

export default useRoute;
