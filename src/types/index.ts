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

export interface AppInitialProps {
    pageInfo: PageInfo;
}

export interface AppProps extends AppInitialProps {
    pageComponent?: React.ComponentType;
}

export interface ServerInitialProps {
    page: string;
}
