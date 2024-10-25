// Importa el tipo Metadata desde el paquete "next" para definir correctamente el tipo de retorno en `generateMetadata`
import { Metadata } from "next";

// Define el tipo de los props que se pasarán al componente y a la función `generateMetadata`
type Props = {
    params: {
        productId: string; // `productId` es un parámetro dinámico que se obtiene de la URL
    };
};

// Función `generateMetadata` para generar metadatos personalizados para la página, como el título
// Esta función es `async` porque usa una promesa para simular una operación asincrónica
export const generateMetadata = async ({ 
    params,
}: Props): Promise<Metadata> => { // Retorna una promesa que cumple el tipo `Metadata`
    
    // Simula una operación asincrónica para obtener el título usando el `productId` de los parámetros
    const title = await new Promise<string>(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`); // Define el título basado en `productId`
        }, 100); // Simula un retraso de 100 ms
    });

    // Retorna un objeto que contiene el título de la página, usando el título dinámico generado
    return {
        title, // Inserta el título dinámico (por ejemplo, "iPhone 123")
    };
};

// Componente principal de la página que muestra detalles del producto usando el `productId` de los parámetros
export default function ProductId({ params }: Props) {
    return <h1>Detail to page Id: {params.productId}</h1>; 
    // Renderiza un encabezado con el `productId`, mostrando algo como "Detail to page Id: 123"
}
