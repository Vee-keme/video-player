import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "content-type": "application/octet-stream",
    // eslint-disable-next-line no-debugger
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}, options `);
  return data;
};
