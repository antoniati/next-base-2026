import { AppError } from "@/lib/core/app-error";

export function mapErrorToMessage(error: AppError): string {
  switch (error.code) {
    case "UNAUTHORIZED":
      return "Você precisa estar logado.";
    case "FORBIDDEN":
      return "Você não tem permissão.";
    case "VALIDATION_ERROR":
      return "Dados inválidos.";
    case "CONFLICT":
      return "Operação não permitida.";
    default:
      return "Erro inesperado. Tente novamente.";
  }
}
