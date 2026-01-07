import { useQuery } from "@tanstack/react-query";
import { getMeAction } from "../actions/get-me.action";
import { queryKeys } from "@/lib/client/query-keys";

// Notas:

// queryFn chama Server Action diretamente

// Cache é por sessão (cookie-bound)

// staleTime explícito

export function useMe() {
  return useQuery({
    queryKey: queryKeys.users.me(),
    queryFn: getMeAction,
    staleTime: 60_000, // 1 min
  });
}
