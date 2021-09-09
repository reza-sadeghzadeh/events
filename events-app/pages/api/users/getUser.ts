import type { NextApiRequest, NextApiResponse } from "next";
import { getUserbyJwt } from "../../../withDB/users";

type Data = {
  name: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await getUserbyJwt(req.body.token);

  res.status(200).json(user);
}
