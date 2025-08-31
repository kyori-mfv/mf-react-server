import React, { useState, useEffect } from "react";

export default function ContactPage(): JSX.Element {
    const [hydrated, setHydrated] = useState<boolean>(false);

    useEffect(() => {
        console.log("Client: Contact page hydration complete");
        setHydrated(true);
    }, []);

    return (
        <div>
            <h1>Contact Us</h1>
            <p>This is the contact page demonstrating file-based routing.</p>
            <p>Hydrated: {hydrated ? "yes" : "no"}</p>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
        </div>
    );
}
