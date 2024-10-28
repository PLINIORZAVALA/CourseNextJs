"use client"; // Indica que este es un componente de cliente

import Link from "next/link"; // Importa el componente Link para la navegación
import { usePathname } from "next/navigation"; // Importa el hook usePathname para obtener la ruta actual
import "./style.css"; // Importa los estilos CSS
import { useState } from "react"; // Importa useState para manejar el estado

// Definición de enlaces de navegación con nombre y ruta
const navLinks = [
    { name: "Register", href: "/auth/with-auth-layout/register" },
    { name: "Login", href: "/auth/with-auth-layout/login" },
    { name: "Forgot Password", href: "/auth/forgot-password" },
];

// Componente principal del layout de autenticación
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode; // Tipo de los hijos que se pasan al componente
}) {
    // Obtiene la ruta actual para comparar y resaltar el enlace activo
    const pathname = usePathname();
    const [input, setInput] = useState(""); // Estado para el input del formulario

    return (
        <div>
            {/* Campo de entrada para texto */}
            <div>
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} // Actualiza el estado del input
                />
            </div>

            {/* Mapea los enlaces de navegación y aplica estilo condicional */}
            {navLinks.map((link) => {
                // Determina si el enlace es el activo comparando la ruta
                const isActive = pathname.startsWith(link.href);

                return (
                    // Enlace a la ruta específica, resaltado si es la ruta activa
                    <Link
                        href={link.href}
                        key={link.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                );
            })}

            {/* Renderiza los componentes secundarios o hijos */}
            <div>{children}</div>
        </div>
    );
}
