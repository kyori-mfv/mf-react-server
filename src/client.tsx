import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { AppInitialProps } from "./types";
import { getPageComponent } from "./router/manifest-router";

declare global {
    interface Window {
        __INITIAL_PROPS__: AppInitialProps;
    }
}

const pageInfo = window.__INITIAL_PROPS__.pageInfo;
const { default: pageComponent } = await getPageComponent(pageInfo.path);
hydrateRoot(
    document.getElementById("root")!,
    <App pageComponent={pageComponent} pageInfo={pageInfo} />,
);
