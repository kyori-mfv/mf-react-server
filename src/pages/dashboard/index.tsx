import { useState, useEffect } from "react";

export default function IndexPage(): JSX.Element {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: Dashboard index page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>Dashboard Index</h1>
            <p>This is the dashboard index page</p>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
        </div>
    );
}
