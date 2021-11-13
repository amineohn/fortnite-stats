import type { NextApiResponse } from "next";
import { fetchMaps } from "../../libs/maps";
export default async (_, res: NextApiResponse) => {
  const response = await fetchMaps();
  return res.status(200).json(response.data.data);
};
