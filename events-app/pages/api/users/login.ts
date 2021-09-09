import { getUser } from "../../../withDB/users";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import Joi from "joi";
import bcrypt from "bcrypt";
import _ from "lodash";
import Router from "next/router";

const getUserJoiSchema = () => {
  const joiSchema = Joi.object({
    email: Joi.string().min(4).max(49).email().required().messages({
      "string.base": `در نوشتن ایمیل باید از حروف استفاده کنید`,
      "string.empty": `فیلد ایمیل نباید خالی باشد`,
      "string.min": ` ایمیل باید {#limit} حرف باشد`,
      "any.required": `فیلد ایمیل نباید خالی باشد`,
    }),
    password: Joi.string().min(8).max(32).required().messages({
      "string.base": `در نوشتن رمز عبور باید از حروف استفاده کنید`,
      "string.empty": `فیلد رمز عبور نباید خالی باشد`,
      "string.min": ` رمز عبور باید حداقل {#limit} حرف باشد`,
      "any.required": `رمز عبور نباید خالی باشد`,
    }),
  });

  return joiSchema;
};

const validateUSer = async (user: object) => {
  const schema = getUserJoiSchema();
  let { error } = schema.validate(user);
  return error;
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(200).json({});

  let user = _.pick(req.body, ["email", "password"]);
  let error = await validateUSer(user);
  if (error) {
    return res.status(200).json({ error: error.details[0].message });
  }

  let gotUser = await getUser(user);
  if (!gotUser)
    return res.status(200).json({ error: "رمز عبور یا ایمیل نادرست است" });

  let result = await bcrypt.compare(user.password, gotUser.password);

  if (result) {
    //I should replace this hard coded privateKey with environment variable
    let newJwt = await jwt.sign({ _id: gotUser._id }, "thisismysecretkey");
    return res.status(200).json({ jwt: newJwt });
  }
  return res.status(200).json({ error: "رمز عبور یا ایمیل نادرست است" });
}
