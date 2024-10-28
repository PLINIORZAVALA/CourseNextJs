import React from "react";

// Función para obtener un número entero aleatorio
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count); // Genera un número aleatorio entre 0 y count
}

export default function ProductDetailsLayaut ({
    children,
} : {
    childern : React.ReactNode;
}) {

    const random = getRandomInt(2); // Corrige el typo de 'conts' a 'const'

    // Lanza un error si el número aleatorio es 1
    if (random === 1) {
        throw new Error("Error Loading review");
    }
    
    return (
        <>
            {children}
            <h2>Feature products</h2>
            {/*Carousel here*/}
        </>
    );
}