import { getNavigationData } from "./router/manifest-router";
import { AppProps, NavigationItem } from "./types";

export default function App({ pageComponent: PageComponent }: AppProps) {
    const navigationData = getNavigationData();

    return (
        <div style={{ fontFamily: "sans-serif", padding: 20 }}>
            <nav
                style={{
                    marginBottom: 20,
                    borderBottom: "1px solid #ccc",
                    paddingBottom: 10,
                }}
            >
                {navigationData.map((navItem: NavigationItem) => (
                    <a
                        key={navItem.path}
                        href={navItem.path}
                        style={{
                            marginRight: 20,
                            textDecoration: "none",
                        }}
                    >
                        {navItem.title}
                    </a>
                ))}
            </nav>
            {PageComponent && <PageComponent />}
        </div>
    );
}
