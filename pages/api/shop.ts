import type { NextApiResponse } from "next";
import { fetchShop } from "../../libs/shop";
export default async (_, res: NextApiResponse) => {
  const response = await fetchShop();
  return res.status(200).json(response.data.data);
};
