import React, { useState, useEffect } from "react";

export default function IndexPage(): JSX.Element {
    const [count, setCount] = useState<number>(0);
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: Index page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>Raw React SSR Demo</h1>
            <p><b>Count:</b> {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
        </div>
    );
}
