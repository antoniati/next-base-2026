import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // Arquitetura / boundaries
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/lib/*.server", "@/services/*.server"],
              message:
                "Server-only modules must not be imported into client components.",
            },
            {
              group: ["@prisma/client"],
              message:
                "Prisma must only be imported from server-only modules.",
            },
          ],
        },
      ],

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TS
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Next.js ajustes
      "@next/next/no-html-link-for-pages": "off",
    },
  },

  // Override default ignores of eslint-config-next
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
