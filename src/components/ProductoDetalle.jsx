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
                    <img src={producto.image} alt={producto.title} width="30%" />
                    {producto.title}
                    <br />
                    <p>Precio: ${producto.price}</p>
                    <p><strong>Categoría:</strong> {producto.category}</p>
                    <p><strong>Descripción: </strong>{producto.description}</p>
                </li>
                <hr />
                <Link to={`/productos`}><button>Volver</button></Link>
            </ul>
        </>
    );
}; export default ProductoDetalle;
