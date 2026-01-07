import { useMutation } from "@tanstack/react-query";

export function useSignIn() {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch("/actions/auth/sign-in", {
        method: "POST",
        body: formData,
      });

      return res.json();
    },
  });
}
