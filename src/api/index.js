import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config) => {
    // Add any custom logic before sending the request
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);
client.interceptors.response.use(
  (response) => {
    // Handle the response data
    return response.data;
  },
  (error) => {
    if (error.response) {
      // Optional: Handle common errors (like 401, 403, etc.)
      if (error.response.status === 401) {
        // Possibly redirect to login
        console.error("Unauthorized: Token expired or invalid");
      }
    }
    return Promise.reject(error);
  }
);

export default client;
