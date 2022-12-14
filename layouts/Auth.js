import React from "react";

export default function Auth({ children }) {
    return (
        <>
            <main>
                <div>
                    <div>login</div>
                    {children}
                </div>
            </main>
        </>
    );
}