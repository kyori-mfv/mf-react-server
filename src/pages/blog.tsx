import React, { useState, useEffect } from "react";

interface BlogPageProps {
    serverTime?: string;
}

export default function BlogPage({ serverTime }: BlogPageProps): JSX.Element {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: Blog page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page that was automatically discovered!</p>
            <p><b>Server Time:</b> {serverTime}</p>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
            <div>
                <h2>Recent Posts</h2>
                <ul>
                    <li>Getting Started with React SSR</li>
                    <li>File-based Routing Best Practices</li>
                    <li>Code Splitting Strategies</li>
                </ul>
            </div>
        </div>
    );
}
