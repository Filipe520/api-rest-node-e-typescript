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
    validatedDate = await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
  } catch (erro) {
    const yupError = erro as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: {
        default: validationErrors,
      },
    });
  }
  return res.send("Create");
};
