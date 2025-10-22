import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export function AppProvider({ children }) {
    // Estado de autenticación
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState({ nombre: "", email: "" });

    // Estado del carrito
    const [carrito, setCarrito] = useState([]);

    // Funciones para el carrito
    const agregarAlCarrito = (producto) => {
    
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            const carritoActualizado = carrito.map(item =>
                item.id === producto.id
                ? { ...item, cantidad: (item.cantidad || 1) + 1 } : item
        );
        setCarrito(carritoActualizado);
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarDelCarrito = (productoId) => {
        setCarrito(carrito.filter(item => item.id !== productoId));
    };

    // Función para cerrar sesión
    const cerrarSesion = () => {
        setIsAuthenticated(false);
        setUsuario({ nombre: "", email: "" });
        vaciarCarrito(); 
    };

    // Valor que se provee a todos los componentes
    const value = {
        // Autenticación
        isAuthenticated,
        setIsAuthenticated,
        usuario,
        setUsuario,
        cerrarSesion,
    
        // Carrito
        carrito,
        agregarAlCarrito,
        vaciarCarrito,
        eliminarDelCarrito
    };

    return (
        <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext debe usarse dentro de AppProvider");
    }
    return context;
}
