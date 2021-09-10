import type { NextApiRequest, NextApiResponse } from "next";

import { eventModel } from "../../withDB";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(200).json({});
  let Model = await eventModel();
  console.log(req.body.user);
  await Model.updateOne(
    { id: req.body.eventId },
    { $push: { signups: req.body.user } }
  );
  res.status(200).json({ ok: "ok" });
}
