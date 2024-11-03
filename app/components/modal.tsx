"use client";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef<HTMLDivElement | null>(null);
    const wrapper = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick = useCallback(
        (e: MouseEvent) => {
            // Verifica si el clic fue en el overlay o en el wrapper
            if (e.target === overlay.current || e.target === wrapper.current) {
                onDismiss();
            }
        },
        [onDismiss]
    );

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onDismiss(); // Cierra el modal al presionar Esc
        }
    }, [onDismiss]);

    useEffect(() => {
        document.addEventListener('click', onClick);
        document.addEventListener('keydown', handleKeyDown); // Maneja la tecla Esc

        return () => {
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClick, handleKeyDown]);

    return (
        <div 
            ref={overlay} 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" // Estilos para el overlay
        >
            <div 
                ref={wrapper} 
                className="bg-white rounded-lg p-4 max-w-md mx-auto" // Estilos para el contenido del modal
            >
                {children}
            </div>
        </div>
    );
}
