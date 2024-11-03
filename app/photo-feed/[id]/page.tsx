import Image from "next/image";
import WondersImage, { WonderImage } from "../wonders";

export default function PhotoPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const photo: WonderImage | undefined = WondersImage.find((p) => p.id === id);

    // Si no se encuentra la foto, puedes redirigir o mostrar un mensaje
    if (!photo) {
        return (
            <div className="container mx-auto my-10">
                <h1 className="text-center text-3xl font-bold my-4">Photo not found</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
                </div>
                <Image
                    alt={photo.name}
                    src={photo.src}
                    className="w-full object-cover aspect-square"
                />

                <div className="bg-white py-4">
                    <h3>{photo.photographer}</h3>
                    <h3>{photo.location}</h3>
                </div>
            </div>
        </div>
    );
}
