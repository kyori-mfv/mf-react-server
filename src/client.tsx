import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { AppProps } from "./types";

declare global {
    interface Window {
        __INITIAL_PROPS__: AppProps;
    }
}

const props: AppProps = window.__INITIAL_PROPS__;
hydrateRoot(document.getElementById("root")!, <App {...props} />);
