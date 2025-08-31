import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    {
        ignores: [
            "dist/",
            "public/*.js",
            "public/src_*.js",
            "node_modules/",
            "*.min.js",
            "*.bundle.js",
            "webpack.*.config.js",
            "scripts/discover-pages.js",
        ],
    },
);
