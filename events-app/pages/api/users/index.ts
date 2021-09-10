import { createUser } from "../../../withDB/users";
import type { NextApiRequest, NextApiResponse } from "next";
import Joi from "joi";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import _ from "lodash";

const getUserJoiSchema = () => {
  const joiSchema = Joi.object({
    name: Joi.string().min(2).max(49).required().messages({
      "string.base": `در نوشتن "name" باید از حروف استفاده کنید`,
      "string.empty": `فیلد نام نباید خالی باشد`,
      "string.min": ` نام باید حداقل {#limit} حرف باشد`,
      "any.required": `فیلد نام نباید خالی باشد`,
    }),
    lastname: Joi.string().min(2).max(49).required().messages({
      "string.base": `در نوشتن نام خانوادگی باید از حروف استفاده کنید`,
      "string.empty": `فیلد نام خانوادگی نباید خالی باشد`,
      "string.min": ` نام خانوادگی باید حداقل {#limit} حرف باشد`,
      "any.required": `فیلد نام خانوادگی نباید خالی باشد`,
    }),
    phoneNumber: Joi.number()
      .min(1111111111)
      .max(99999999999)
      .required()
      .messages({
        "number.base": `در نوشتن شماره موبایل باید از اعداد استفاده کنید`,
        "number.empty": `فیلد شماره موبایل نباید خالی باشد`,
        "number.min": ` شماره موبایل باید 11 عدد باشد`,
        "number.required": `فیلد شماره موبایل نباید خالی باشد`,
        "number.type": `در نوشتن شماره موبایل باید از اعداد استفاده کنید`,
      }),
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
    repeatedPassword: Joi.string().min(8).max(32).required().messages({
      "string.base": `در نوشتن تکرار رمز عبور باید از حروف استفاده کنید`,
      "string.empty": `فیلد تکرار رمز عبور نباید خالی باشد`,
      "string.min": ` تکرار رمز عبور باید حداقل {#limit} حرف باشد`,
      "any.required": `تکرار رمز عبور نباید خالی باشد`,
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

  let user = _.pick(req.body, [
    "name",
    "email",
    "password",
    "repeatedPassword",
    "lastname",
    "phoneNumber",
  ]);
  let error = await validateUSer(user);
  if (error) {
    return res.status(200).json({ error: error.details[0].message });
  }

  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);

  const gotUser: { _id: string } = await createUser(user);
  let token = await jwt.sign({ _id: gotUser._id }, "thisismyprivatekey");

  res.status(200).json({ jwt: token });
}
