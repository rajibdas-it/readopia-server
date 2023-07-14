import { ZodError } from "zod";
import { ErrorRequestHandler } from "express";

import { node_env } from "../../config";

import ApiError from "../../error/apiError";
import handleValidationError from "../../error/handleValidationError";
import handleZodErrorHandler from "../../error/handleZodErrorHandler";
import handleCastError from "../../error/handleCastError";
import { IGenericErrorMessage } from "../../interfaces/error";

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  let statusCode = 500;
  let message: string | undefined = "something went wrong";
  let errorMessages: IGenericErrorMessage[] = [];
  if (error?.name === "ValidationError") {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodErrorHandler(error);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  } else if (error?.name === "CastError") {
    // res.status(200).json({ error });
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [{ path: "", message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: "", message: error.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: node_env != "production" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
