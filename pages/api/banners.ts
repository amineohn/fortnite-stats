import type { NextApiResponse } from "next";
import { fetchBanners } from "../../libs/banners";
export default async (_, res: NextApiResponse) => {
  const response = await fetchBanners();
  const banners = await response.data.data;
  return res.status(200).json({ banners });
};
