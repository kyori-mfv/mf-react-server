import { useState, useEffect } from "react";

export default function StatsPage(): JSX.Element {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: Dashboard stats page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>Dashboard Stats</h1>
            <p>This is the dashboard stats page</p>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
        </div>
    );
}
