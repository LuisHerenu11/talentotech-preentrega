import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () => {

    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;

    if (!producto) {
        return (
            <div>
                <p>No se pudo cargar el producto</p>
                <Link to="/carrito">
                    <button>Volver a Productos</button>
                </Link>
            </div>
        );
    }

    return(
        <>
            <h2>Detalles del Producto {id}</h2>
            <ul>
                <li key={producto.id}>
                    <img src={producto.avatar} alt={producto.nombre} width="30%" />
                    {producto.nombre}
                    <br />
                    <p>Precio: ${producto.precio}</p>
                    <p><strong>Descripción: </strong>{producto.descripcion}</p>
                    <p><strong>Categoría:</strong> {producto.categoria}</p>
                </li>
                <hr />
                <Link to={`/productos`}><button>Volver a Productos</button></Link>
            </ul>
        </>
    );
}; export default ProductoDetalle;
