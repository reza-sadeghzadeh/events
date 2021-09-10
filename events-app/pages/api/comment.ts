import Joi from "joi";
import type { NextApiRequest, NextApiResponse } from "next";
import { eventModel } from "../../withDB";

const joiSchema = Joi.object({
  name: Joi.string().min(2).max(49).required().messages({
    "string.base": `در نوشتن "name" باید از حروف استفاده کنید`,
    "string.empty": `فیلد نام نباید خالی باشد`,
    "string.min": ` نام باید حداقل {#limit} حرف باشد`,
    "any.required": `فیلد نام نباید خالی باشد`,
  }),

  email: Joi.string().min(4).max(49).email().required().messages({
    "string.base": `در نوشتن ایمیل باید از حروف استفاده کنید`,
    "string.empty": `فیلد ایمیل نباید خالی باشد`,
    "string.min": ` ایمیل باید {#limit} حرف باشد`,
    "any.required": `فیلد ایمیل نباید خالی باشد`,
  }),
  comment: Joi.string().min(4).max(499).required().messages({
    "string.base": `در نوشتن کامنت باید از حروف استفاده کنید`,
    "string.empty": `فیلد کامنت نباید خالی باشد`,
    "string.min": ` کامنت باید حداقل {#limit} حرف باشد`,
    "any.required": `کامنت نباید خالی باشد`,
  }),
  date: Joi.date(),
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(200).json({});
  let Model = await eventModel();

  let { error } = joiSchema.validate(req.body.comment);
  if (error) return res.status(200).json({ error: error.message });

  await Model.updateOne(
    { id: req.body.eventId },
    { $push: { comments: req.body.comment } }
  );
  res.status(200).json({ ok: "ok" });
}
