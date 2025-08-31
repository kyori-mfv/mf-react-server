import React, { useState, useEffect } from "react";

export default function AboutPage(): JSX.Element {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: About page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
        </div>
    );
}
