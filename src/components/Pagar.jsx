import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Pagar() {
    const { usuario, cerrarSesion, carrito, vaciarCarrito } = useAppContext();
    const navigate = useNavigate();

    // Calculo del total
    const total = carrito.reduce(
        (suma, producto) => suma + Number(producto.price),
        0
    );

    // Función para finalizar compra
    const comprar = () => {
        alert("¡Compra realizada con éxito!");
        vaciarCarrito(); // Limpiar carrito después de comprar
        navigate("/productos");
    };

    return (
        <div>
        {/* Info del usuario */}
        <div>
            <h2>{usuario.nombre}</h2>
            <p>Email: {usuario.email}</p>
            <button onClick={cerrarSesion}>Cerrar sesión</button>
            <hr />
        </div>

        {/* Carrito */}
        <div>
            <h2>Tu compra:</h2>

            {carrito.length > 0 ? (
            <>
                {carrito.map((producto) => (
                <div key={producto.id}>
                    <img src={producto.image} alt={producto.title} width="60" />
                    <span>{producto.title}</span>
                    <strong>${producto.price}</strong>
                </div>
                ))}
                <h3>Total a pagar: ${Number(total).toFixed(3)}</h3>
            </>
            ) : (
            <p>No hay productos en el carrito</p>
            )}
        </div>
        
        <div>
            {carrito.length > 0 && (
            <button onClick={comprar}>Confirmar y Pagar</button>
            )}
            <button onClick={() => navigate("/productos")}>
            {carrito.length > 0 ? "Seguir Comprando" : "Volver al catalogo"}
            </button>
        </div>
        </div>
    );
}