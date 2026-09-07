import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface ICidade {
  nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object({
  nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validatedDate: ICidade | undefined = undefined;
  try {
    validatedDate = await bodyValidation.validate(req.body);
  } catch (erro) {
    const yupError = erro as yup.ValidationError;

    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }
  return res.send("Create");
};
