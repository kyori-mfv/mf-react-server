// Router that uses the generated routes manifest
import routesManifest from "./routes-manifest.json";
import { RoutesManifest, PageInfo, PageComponent } from "../types";

// Get page component for a route using aliases
export function getPageComponent(
    routePath: string,
): Promise<{ default: PageComponent }> {
    const manifest = routesManifest as RoutesManifest;
    const page = manifest.pages[routePath];

    if (!page) {
        throw new Error(`Page not found: ${routePath}`);
    }

    console.log("Loading page:", page);

    // Fallback to direct import
    return import(`@/pages/${page.component}`);
}

// Get all available routes
export function getAllRoutes(): string[] {
    const manifest = routesManifest as RoutesManifest;
    return manifest.routes;
}

// Get navigation data
export function getNavigationData() {
    const manifest = routesManifest as RoutesManifest;
    return manifest.navigation;
}

// Check if page exists
export function pageExists(routePath: string): boolean {
    const manifest = routesManifest as RoutesManifest;
    return routePath in manifest.pages;
}

// Get page info
export function getPageInfo(routePath: string): PageInfo | null {
    const manifest = routesManifest as RoutesManifest;
    return manifest.pages[routePath] || null;
}
