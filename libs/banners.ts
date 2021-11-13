import axios from "axios";

const userEndpoint = `https://fortnite-api.com/v1/banners`;

export const fetchBanners = async () => {
  return await axios.get(userEndpoint);
};
