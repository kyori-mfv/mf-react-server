import { glob } from "glob";
import path from "path";
import fs from "fs-extra";

// Convert file path to route path
function filePathToRoute(filePath) {
    const relativePath = path.relative("src/pages", filePath);
    const routePath = relativePath
        .replace(/\.(tsx?|jsx?)$/, "") // Remove .tsx, .ts, .jsx, .js extensions
        .replace(/^index$/, "") // Convert index to empty string
        .replace(/\/$/, "/") // Ensure trailing slash for root
        .replace(/^$/, "/"); // Empty string becomes root

    return routePath === "/" ? "/" : `/${routePath}`;
}

// Convert route path to page title
function routeToTitle(routePath) {
    if (routePath === "/") return "Home";

    return routePath
        .slice(1) // Remove leading slash
        .split("/")
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ");
}

// Discover pages and generate routes manifest
async function discoverPages() {
    try {
        const pageFiles = await glob("src/pages/**/*.{tsx,jsx}", {
            cwd: process.cwd(),
        });

        const pages = {};

        for (const filePath of pageFiles) {
            const routePath = filePathToRoute(filePath);
            const title = routeToTitle(routePath);

            pages[routePath] = {
                component: path.basename(filePath),
                title,
                path: routePath,
            };
        }

        // Generate routes manifest
        const manifest = {
            pages,
            routes: Object.keys(pages),
            navigation: Object.values(pages).map((page) => ({
                title: page.title,
                path: page.path,
            })),
        };

        // Write manifest to file
        await fs.writeJson("src/router/routes-manifest.json", manifest, {
            spaces: 2,
        });

        console.log("✅ Discovered pages:", Object.keys(pages));
        console.log("📁 Routes manifest generated at src/routes-manifest.json");

        return manifest;
    } catch (error) {
        console.error("❌ Error discovering pages:", error);
        return { pages: {}, routes: [], navigation: [] };
    }
}

// Run discovery
discoverPages();
