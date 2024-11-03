import Image from "next/image";
import WondersImage, { WonderImage } from "../../wonders";
import Modal from "@/app/components/modal";

export default function PhotoPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const photo: WonderImage | undefined = WondersImage.find((p) => p.id === id);

    // Manejo de errores si no se encuentra la foto
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
                <Modal>
                    <Image
                        alt={photo.name}
                        src={photo.src}
                        className="w-full object-cover aspect-square"
                    />

                    <div className="bg-white py-4">
                        <h2 className="text-xl font-semibold">{photo.name}</h2>
                        <h3>{photo.photographer}</h3>
                        <h3>{photo.location}</h3>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
