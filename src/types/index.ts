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
    [key: string]: any;
}

export interface ServerInitialProps {
    page: string;
}

// Page alias types
export type PageAlias = 'home' | 'about' | 'contact' | 'blog';
export type RoutePath = '/' | '/about' | '/contact' | '/blog';

// Page component type
export type PageComponent = React.ComponentType<any>;
