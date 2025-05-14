import client from ".";
import { METHODS } from "../utils/methods";

export const api = {
  USERS: {
    getAll: (config = {}) => client({ url: "/users", ...config }),
    get: ({ id, ...config } = {}) => client({ url: `/users/${id}`, ...config }),
    create: ({ data, ...config } = {}) =>
      client({ method: METHODS.POST, url: "/users", data, ...config }),
    update: ({ id, data, ...config } = {}) =>
      client({ method: METHODS.PUT, url: `/users/${id}`, data, ...config }),
    delete: ({ id, ...config } = {}) =>
      client({ method: METHODS.DELETE, url: `/users/${id}`, ...config }),
  },
  POSTS: {
    getAll: (config = {}) => client({ url: "/posts", ...config }),
    get: ({ id, ...config } = {}) => client({ url: `/posts/${id}`, ...config }),
    create: ({ data, ...config } = {}) =>
      client({ method: METHODS.POST, url: "/posts", data, ...config }),
    update: ({ id, data, ...config } = {}) =>
      client({ method: METHODS.PUT, url: `/posts/${id}`, data, ...config }),
    delete: ({ id, ...config } = {}) =>
      client({ method: METHODS.DELETE, url: `/posts/${id}`, ...config }),
  },
  COMMENTS: {
    getAll: (config = {}) => client({ url: "/comments", ...config }),
    get: ({ id, ...config } = {}) =>
      client({ url: `/comments/${id}`, ...config }),
    create: ({ data, ...config } = {}) =>
      client({ method: METHODS.POST, url: "/comments", data, ...config }),
    update: ({ id, data, ...config } = {}) =>
      client({ method: METHODS.PUT, url: `/comments/${id}`, data, ...config }),
    delete: ({ id, ...config } = {}) =>
      client({ method: METHODS.DELETE, url: `/comments/${id}`, ...config }),
  },
  TODOS: {
    getAll: (config = {}) => client({ url: "/todos", ...config }),
    get: ({ id, ...config } = {}) => client({ url: `/todos/${id}`, ...config }),
    create: ({ data, ...config } = {}) =>
      client({ method: METHODS.POST, url: `/todos`, data, ...config }),
    update: ({ id, data, ...config } = {}) =>
      client({ method: METHODS.PUT, url: `/todos/${id}`, data, ...config }),
    delete: ({ id, ...config } = {}) =>
      client({ method: METHODS.DELETE, url: `/todos/${id}`, ...config }),
  },
};
