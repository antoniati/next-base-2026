import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileAction } from "../actions/update-profile.action";
import { queryKeys } from "@/lib/client/query-keys";

export function useUpdateProfile() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateProfileAction,

    onSuccess(result) {
      if (!result.ok) return;

      // invalida domínio afetado
      qc.invalidateQueries({
        queryKey: queryKeys.users.me(),
      });
    },
  });
}
