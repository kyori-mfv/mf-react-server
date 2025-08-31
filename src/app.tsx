import React, { Suspense } from "react";
import { getPageComponent, getNavigationData } from "./router/manifest-router";
import { AppProps, NavigationItem } from "./types";

export default function App({ initialCount, serverTime, page, aboutData }: AppProps) {
    const [PageComponent, setPageComponent] = React.useState<React.ComponentType<any> | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, _] = React.useState(page);

    React.useEffect(() => {
        const loadPage = async () => {
            setLoading(true);
            try {
                // Convert page name to path format
                const path = currentPage === "home" ? "/" : `/${currentPage}`;
                const module = await getPageComponent(path);
                setPageComponent(() => module.default);
            } catch (error) {
                console.error("Failed to load page:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPage();
    }, [currentPage]);

    const renderContent = () => {
        if (loading) {
            return <div>Loading page...</div>;
        }

        if (!PageComponent) {
            return <div>Page not found</div>;
        }

        const props = {};

        return (
            <Suspense fallback={<div>Loading page content...</div>}>
                <PageComponent {...props} />
            </Suspense>
        );
    };

    const navigationData = getNavigationData();

    // Helper function to check if a nav item is active
    const isActivePage = (navPath: string): boolean => {
        if (navPath === "/") {
            return currentPage === "home";
        }
        return currentPage === navPath.slice(1);
    };

    return (
        <div style={{ fontFamily: "sans-serif", padding: 20 }}>
            <nav style={{ marginBottom: 20, borderBottom: "1px solid #ccc", paddingBottom: 10 }}>
                {navigationData.map((navItem: NavigationItem) => (
                    <a
                        key={navItem.path}
                        href={navItem.path}
                        style={{
                            marginRight: 20,
                            textDecoration: "none",
                            color: isActivePage(navItem.path) ? "#007bff" : "#333"
                        }}
                    >
                        {navItem.title}
                    </a>
                ))}
            </nav>
            {renderContent()}
        </div>
    );
}
