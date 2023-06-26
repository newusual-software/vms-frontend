import axios from "axios";

const api = axios.create({
  baseURL: "https://vms-backend.up.railway.app/api", // Your API base URL
});

const Post = (url, data, callback) => {
  api
    .post(url, data)
    .then((res) => {
      callback && callback(res.data, null);
    })
    .catch((err) => {
      callback && callback(null, err.response.data);
    });
};


export { Post };
