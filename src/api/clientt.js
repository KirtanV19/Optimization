import client from ".";
import { METHODS } from "../utils/methods";

export const api = {
  USERS: {
    getAll: ({ data, ...config }) => client({ url: "/users", data, ...config }),
    get: ({ id, data, ...config }) =>
      client({ url: `/users/${id}`, data, ...config }),
    create: ({ data, ...config }) =>
      client({ method: METHODS.POST, url: "/users", data, ...config }),
    update: ({ id, data, ...config }) =>
      client({ method: METHODS.PUT, url: `/users/${id}`, data, ...config }),
    delete: ({ id, ...config }) =>
      client({ method: METHODS.DELETE, url: `/users/${id}`, ...config }),
  },
  POSTS: {
    getAll: ({ data, ...config }) => client({ url: "/posts", data, ...config }),
    get: ({ id, data, ...config }) =>
      client({ url: `/posts/${id}`, data, ...config }),
    create: ({ data, ...config }) =>
      client({ method: METHODS.POST, url: "/posts", data, ...config }),
    update: ({ id, data, ...config }) =>
      client({ method: METHODS.PUT, url: `/posts/${id}`, data, ...config }),
    delete: ({ id, ...config }) =>
      client({ method: METHODS.DELETE, url: `/posts/${id}`, ...config }),
  },
  COMMENTS: {
    getAll: ({ data, ...config }) =>
      client({ url: "/comments", data, ...config }),
    get: ({ id, data, ...config }) =>
      client({ url: `/comments/${id}`, data, ...config }),
    create: ({ data, ...config }) =>
      client({ method: METHODS.POST, url: "/comments", data, ...config }),
    update: ({ id, data, ...config }) =>
      client({ method: METHODS.PUT, url: `/comments/${id}`, data, ...config }),
    delete: ({ id, ...config }) =>
      client({ method: METHODS.DELETE, url: `/comments/${id}`, ...config }),
  },
};
