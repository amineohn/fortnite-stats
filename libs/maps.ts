import axios from "axios";

const userEndpoint = `https://fortnite-api.com/v1/map`;

export const fetchMaps = async () => {
  return await axios.get(userEndpoint);
};
