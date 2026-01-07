import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "../actions/update-profile.action";

export function useUpdateProfile() {
  return useMutation({
    mutationFn: updateProfileAction,
  });
}
