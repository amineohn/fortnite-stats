import type { NextApiResponse } from "next";
import { fetchNews } from "../../libs/news";
export default async (_, res: NextApiResponse) => {
  const response = await fetchNews();
  return res.status(200).json(response.data.data);
};
