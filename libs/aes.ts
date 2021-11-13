import axios from "axios";

const userEndpoint = `https://fortnite-api.com/v2/aes`;

export const fetchAES = async () => {
  return await axios.get(userEndpoint);
};
