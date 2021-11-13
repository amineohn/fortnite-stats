import axios from "axios";

const userEndpoint = `https://fortnite-api.com/v2/shop/br`;

export const fetchShop = async () => {
  return await axios.get(userEndpoint);
};
