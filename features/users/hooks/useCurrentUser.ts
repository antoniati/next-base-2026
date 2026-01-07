import { useQuery } from "@tanstack/react-query";
import { getCurrentUserHandler } from "../handlers/get-current-user.handler";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUserHandler,
  });
}
