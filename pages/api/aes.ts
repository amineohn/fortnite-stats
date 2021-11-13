import type { NextApiResponse } from "next";
import { fetchAES } from "../../libs/aes";
export default async (_, res: NextApiResponse) => {
  const response = await fetchAES();
  return res.status(200).json(response.data.data);
};
