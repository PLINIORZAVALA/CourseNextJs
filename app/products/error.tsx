"use client"; // Asegúrate de usar las comillas correctamente

export default function ErrorBoundary({
    error,
    reset,
}: {
    error : Error
    reset: () => void;
}) {
    return (
        <div>
        {error.message} <button onClick={reset}>Try again</button>
        </div> // Corrige el typo en "Error"
    );
}
