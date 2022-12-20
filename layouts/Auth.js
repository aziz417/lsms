import React from "react";

export default function Auth({ children }) {
    return (
        <>
            <main>
                <div>
                    {children}
                </div>
            </main>
        </>
    );
}