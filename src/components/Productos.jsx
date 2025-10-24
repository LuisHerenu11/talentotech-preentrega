import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import CarritoCompras from "./Carrito";
import { useAppContext } from "../context/AppContext";

export default function Productos () {
    const [productos, setProductos] = useState ([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
     // Contexto para el carrito
    const { agregarAlCarrito } = useAppContext();

    useEffect (() => { 	
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {setProductos(data); setCargando(false);})
        .catch((error) => 
            { 
                {console.error("Error!,", error)}
                setError('Hubo un problema al cargar los productos.'); 
                setCargando(false); 
            });
    }, []);

    if (cargando) return <p> Cargando productos... </p>;
    if (error) return <p>{ error }</p>;
    
    return (
        <div style={{backgroundColor: '#F5F5DC'}}>
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
            <CarritoCompras/>
        </div>
    );
}