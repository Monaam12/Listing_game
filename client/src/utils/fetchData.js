import axios from "axios";

export const fetchData = (url, genre, platform) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${url}`, {
      params: { genre, platform },
    })
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};
