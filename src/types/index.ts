export interface NavigationItem {
    title: string;
    path: string;
}

export interface PageInfo {
    component: string;
    title: string;
    path: string;
}

export interface RoutesManifest {
    pages: Record<string, PageInfo>;
    routes: string[];
    navigation: NavigationItem[];
}

export interface AppProps {
    page: string;
}

export interface PageComponentProps {
    [key: string]: unknown;
}

export interface ServerInitialProps {
    page: string;
}

// Page component type
export type PageComponent = React.ComponentType<PageComponentProps>;
