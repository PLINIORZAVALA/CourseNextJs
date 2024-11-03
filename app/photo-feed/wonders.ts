import { StaticImageData } from "next/image";

// Importa las imágenes desde la carpeta "photo"
import photo1 from "./photo/descarga1.jpeg";
import photo2 from "./photo/descarga2.jpeg";
import photo3 from "./photo/descarga3.jpeg";
import photo4 from "./photo/descarga4.jpeg";
import photo5 from "./photo/descarga5.jpeg";
import photo7 from "./photo/descarga7.jpeg";
import photo8 from "./photo/descarga8.jpeg";
import photo9 from "./photo/descarga9.jpeg";
import photo10 from "./photo/descarga10.jpeg";

// Define el tipo para las imágenes de maravillas
export type WonderImage = {
    id: string; // ID único para cada imagen
    name: string; // Nombre de la maravilla
    src: StaticImageData; // Ruta de la imagen
    photographer: string; // Fotógrafo de la imagen
    location: string; // Ubicación de la maravilla
};

// Crea un array de imágenes de maravillas
const WondersImage: WonderImage[] = [
    {
        id: "1",
        name: "Apple Red Delicious",
        src: photo1,
        photographer: "Photo by John Doe on Unsplash",
        location: "USA",
    },
    {
        id: "2",
        name: "Apple Granny Smith",
        src: photo2,
        photographer: "Photo by Jane Smith on Unsplash",
        location: "Australia",
    },
    {
        id: "3",
        name: "Apple Fuji",
        src: photo3,
        photographer: "Photo by Mike Johnson on Unsplash",
        location: "Japan",
    },
    {
        id: "4",
        name: "Apple Gala",
        src: photo4,
        photographer: "Photo by Emily Davis on Unsplash",
        location: "New Zealand",
    },
    {
        id: "5",
        name: "Apple Honeycrisp",
        src: photo5,
        photographer: "Photo by Lisa Brown on Unsplash",
        location: "USA",
    },
    // Se omitió el id "6"
    {
        id: "7",
        name: "Apple Cortland",
        src: photo7,
        photographer: "Photo by Sarah White on Unsplash",
        location: "Canada",
    },
    {
        id: "8",
        name: "Apple McIntosh",
        src: photo8,
        photographer: "Photo by Chris Black on Unsplash",
        location: "USA",
    },
    {
        id: "9",
        name: "Apple Opal",
        src: photo9,
        photographer: "Photo by Michael Green on Unsplash",
        location: "Germany",
    },
    {
        id: "10",
        name: "Apple Ambrosia",
        src: photo10,
        photographer: "Photo by Angela Carter on Unsplash",
        location: "Canada",
    }
];

// Exporta el array de imágenes de maravillas como exportación por defecto
export default WondersImage;
