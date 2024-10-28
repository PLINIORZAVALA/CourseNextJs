"use client"
import { notFound } from "next/navigation"; // Importa la función notFound de next/navigation

// Función para obtener un número entero aleatorio
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count); // Genera un número aleatorio entre 0 y count
}

// Componente principal que muestra los detalles de la reseña
export default function ReviewDetail({
    params,
}: {
    params: {
        productId: string; // ID del producto
        reviewId: string; // ID de la reseña
    };
}) {
    //const random = getRandomInt(2); // Corrige el typo de 'conts' a 'const'

    // Lanza un error si el número aleatorio es 1
    //if (random === 1) {
        //throw new Error("Error Loading review");
    //}

    // Redirige a la página 404 si el reviewId es mayor que 1000
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }

    // Renderiza la información de la reseña
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    );
}
