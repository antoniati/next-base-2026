"use client";

import { useSignIn } from "../hooks/useSignIn";

export function SignInForm() {
  const { mutate, isPending } = useSignIn();

  return (
    <form action={(formData) => mutate(formData)}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button disabled={isPending}>Sign in</button>
    </form>
  );
}
