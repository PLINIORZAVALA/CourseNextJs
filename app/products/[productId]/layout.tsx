import React from "react";

export default function ProductDetailsLayaut ({
    children,
} : {
    childern : React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Feature products</h2>
            {/*Carousel here*/}
        </>
    );
}