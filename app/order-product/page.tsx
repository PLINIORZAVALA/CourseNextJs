"use client"; // Directiva para indicar que este es un componente de cliente

import { useRouter } from "next/navigation"; // Importa el hook useRouter desde next/navigation

export default function OrderProduct() { // Nombre del componente
    const router = useRouter(); // Inicializa el router

    // Función que se ejecuta al hacer clic en el botón
    const handleClick = () => {
        console.log("Placing your order"); // Mensaje en la consola
        router.push("/"); // Redirige a la página principal
    };

    return (
        <>
            <h1>Order Product</h1> 
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}
