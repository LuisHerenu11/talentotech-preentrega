import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbarStyles.css';
import { useAppContext } from '../context/AppContext'; 
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
    // carrito traído del context
    const { carrito, vaciarCarrito, agregarAlCarrito, quitarCantidad } = useAppContext();
    const navigate = useNavigate();

    // visibilidad del desplegable del carrito.
    const [isCartOpen, setIsCartOpen] = useState(false);

    // totales
    const totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0);
    const total = carrito.reduce((sum, item) => sum + (Number(item.precio) * (item.cantidad || 1)), 0);

    // toggle de carrito
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const irAPagar = () => {
        setIsCartOpen(false);
        navigate("/pagar", { state: { carrito } });
    };

    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/productos">CATALOGO</Link></li>
                <li className="cart-icon-container">
                    <button onClick={toggleCart} className="cart-icon-button">
                        <FaShoppingCart />
                        {/* badge con la cantidad de items */}
                        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </button>
                    {/* dropdown del carrito */}
                    {isCartOpen && (
                        <div className="cart-dropdown">
                            {carrito.length === 0 ? (
                                <p>El carrito está vacío</p>
                            ) : (
                                <>
                                    <div className="cart-dropdown-items">
                                        {carrito.map((item) => (
                                            <div key={item.id} className="cart-dropdown-item">
                                                <span>{item.nombre} (${Number(item.precio).toFixed(3)})</span>
                                                <div className='cart-item-controls'>
                                                    <button onClick={() => quitarCantidad(item.id)}>-</button>
                                                    <span>{item.cantidad}</span>
                                                    <button onClick={() => agregarAlCarrito(item)}>+</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="cart-dropdown-footer">
                                        <hr />
                                        <strong>Total: ${Number(total).toFixed(3)}</strong>
                                        <button onClick={vaciarCarrito}>Vaciar</button>
                                        <button onClick={irAPagar}>Pagar</button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </li>
                <li><Link to="/iniciar-sesion">INICIAR SESION</Link></li>
            </ul>
        </nav>
    );
}export default Navbar;
