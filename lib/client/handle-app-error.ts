import { AppError } from "@/lib/core/app-error";
import { mapErrorToMessage } from "./error-mapper";

type HandleOptions = {
  onUnauthorized?: () => void;
  onForbidden?: () => void;
};

export function handleAppError(
  error: AppError,
  options?: HandleOptions
) {
  switch (error.code) {
    case "UNAUTHORIZED":
      options?.onUnauthorized?.();
      break;

    case "FORBIDDEN":
      options?.onForbidden?.();
      break;
  }

  return {
    message: mapErrorToMessage(error),
    code: error.code,
  };
}
