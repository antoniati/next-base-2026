export type AppErrorCode =
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_ERROR"
  | "CONFLICT"
  | "INTERNAL_ERROR";

export class AppError {
  readonly code: AppErrorCode;
  readonly message: string;
  readonly meta?: Record<string, unknown>;

  private constructor(
    code: AppErrorCode,
    message: string,
    meta?: Record<string, unknown>
  ) {
    this.code = code;
    this.message = message;
    this.meta = meta;
  }

  static unauthorized() {
    return new AppError("UNAUTHORIZED", "User not authenticated");
  }

  static forbidden() {
    return new AppError("FORBIDDEN", "User has no permission");
  }

  static notFound(resource = "Resource") {
    return new AppError("NOT_FOUND", `${resource} not found`);
  }

  static validation(message: string, meta?: Record<string, unknown>) {
    return new AppError("VALIDATION_ERROR", message, meta);
  }

  static conflict(message: string) {
    return new AppError("CONFLICT", message);
  }

  static internal(meta?: Record<string, unknown>) {
    return new AppError("INTERNAL_ERROR", "Unexpected error", meta);
  }
}
