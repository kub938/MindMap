// @ts-check
import globals from "globals";
import { eslintBaseConfig } from "@repo/config/eslint.base.mjs";

export default [
  ...eslintBaseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "commonjs",
    },
  },
];
