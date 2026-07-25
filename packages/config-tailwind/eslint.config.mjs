import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: ["node_modules", "dist"],
  extends: [...tseslint.configs.recommended],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
  },
});
