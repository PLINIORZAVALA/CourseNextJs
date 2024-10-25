import React from "react";

export default function AuthLayout ({
    children,
} : {
    childern : React.ReactNode;
}) {
    return (
        <div>
            <h2>Inner layout</h2>
            {children}
        </div>
    );
}