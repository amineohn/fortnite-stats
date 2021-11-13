import axios from "axios";

const userEndpoint = `https://fortnite-api.com/v2/news/br`;

export const fetchNews = async () => {
  return await axios.get(userEndpoint);
};
