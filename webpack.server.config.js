import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: "./server.tsx",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "server.cjs",
        clean: true,
        library: {
            type: "commonjs2",
        },
        chunkFormat: "commonjs",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-typescript",
                            ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                        plugins: [
                            [
                                "module-resolver",
                                {
                                    root: ["./src"],
                                    alias: {
                                        "@": "./src",
                                        "@/pages": "./src/pages",
                                        "@/components": "./src/components",
                                        "@/types": "./src/types",
                                        "@/router": "./src/router",
                                        "@/utils": "./src/utils",
                                    },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@/pages": path.resolve(__dirname, "src/pages"),
            "@/components": path.resolve(__dirname, "src/components"),
            "@/types": path.resolve(__dirname, "src/types"),
            "@/router": path.resolve(__dirname, "src/router"),
            "@/utils": path.resolve(__dirname, "src/utils"),
        },
    },
    externals: {
        express: "commonjs express",
    },
};
