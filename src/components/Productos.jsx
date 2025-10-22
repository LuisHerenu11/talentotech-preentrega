import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";

export default function Productos () {
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [carrito, setCarrito] = useState([]);

    useEffect (() => { 	
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {setProductos(data); setCargando(false);})
        .catch((error) => { setError('Hubo un problema al cargar los productos.'); setCargando(false); });
    }, []);

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

    if (cargando) return <p> Cargando productos... </p>;
    if (error) return <p>{ error }</p>;
    
    return (
        <div>
            <ul> {productos.map((producto) => (
                <li key ={ producto.id}>
                    <img src={producto.image}/>                
                    <h3>{producto.title}</h3>
                    <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>${producto.price}</p>
                    <Link to={`/productos/${producto.id}`} state={{producto}}><button>Más detalles</button></Link>
                    <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                </li>
                ))}
            </ul>
            <CarritoCompras carrito={carrito} setCarrito={setCarrito} />
        </div>
    );
}