"use client"; // Asegúrate de usar las comillas correctamente

export default function ErrorBoundary({error}: {
    error : Error
}) {
    return <div>{error.message}</div>; // Corrige el typo en "Error"
}
