import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../actions/update-profile.action";
import { handleAppError } from "@/lib/client/handle-app-error";

export function useUpdateProfile() {
  return useMutation({
    mutationFn: updateProfileAction,
    onSuccess(result) {
      if (!result.ok) {
        const handled = handleAppError(result.error, {
          onUnauthorized: () => {
            // ex: redirect("/login")
          },
        });

        // aqui pode ser integrado ao toast/snackbar por exemplo
        // toast.error(handled.message)
      }
    },
  });
}
