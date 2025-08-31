import express from "express";
import { renderToString } from "react-dom/server";
import App from "./src/app";
import routesManifest from "@/router/routes-manifest.json";
import { RoutesManifest } from "./src/types";
import { getPageComponent } from "@/router/manifest-router";

const app = express();
const PORT = 5000;

// Serve client bundle
app.use("/static", express.static("public"));

// Universal route handler
app.get("*", async (req, res) => {
    // Check if route exists in manifest
    const manifest = routesManifest as RoutesManifest;
    const pageInfo = manifest.pages[req.path];

    if (!pageInfo) {
        return res.status(404).send(`
            <!DOCTYPE html>
            <html>
                <head><title>404 - Page Not Found</title></head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <p>The page "${req.path}" does not exist.</p>
                    <a href="/">Go Home</a>
                </body>
            </html>
        `);
    }

    const title = `React SSR Demo - ${pageInfo.title}`;

    const { default: page } = await getPageComponent(req.path);

    const appHTML = renderToString(
        <App pageComponent={page} pageInfo={pageInfo} />,
    );

    // Embed props for hydration
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script>
          window.__INITIAL_PROPS__ = ${JSON.stringify({ pageInfo })};
        </script>
        <script src="/static/client.js" type="module"></script>
      </body>
    </html>
  `;

    res.send(html);
});

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
