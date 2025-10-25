import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import "../styles/productosStyles.css";

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
        <div className='productos-container'>
            <ul className='productos-lista'> {productos.map((producto) => (
                <li className='producto-item' key={producto.id}>
                    <img src={producto.image}/>                
                    <h3>{producto.title}</h3>
                    <p>${producto.price}</p>
                    <div className="producto-botones">
                        <Link to={`/productos/${producto.id}`} state={{producto}} className="btn-detalles-link"><button className="btn-detalles">Más detalles</button></Link>
                        <button className="btn-comprar" onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
}