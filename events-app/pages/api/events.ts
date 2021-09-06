// imp
import type { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../withDB";
import nextConnect from "next-connect";
import multer from "multer";

import "../../withDB/connection";

// type Data = {
//   name: string[];
// };
const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/img",
    filename: (req, file, cb) => cb(null, `event-${file.originalname}`),
  }),
});

apiRoute.use(upload.single("image"));

apiRoute.post(async (req, res) => {
  let data = JSON.parse(req.body.data);

  try {
    let Model = eventModel();
    let fake = new Model({ ...data });
    fake = await fake.save();
    res.status(200).json(fake);
  } catch (ex) {
    console.log(ex);
    res.status(200).send("s");
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
