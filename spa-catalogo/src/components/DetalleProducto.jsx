import { useParams, Link } from 'react-router-dom';

export default function DetalleProducto() {
    const { id } = useParams(); 

    return (
        <div>
            <h2>Detalle del Producto</h2>
            <p>Estás viendo la información ampliada del producto ID: {id}</p>
            <Link to="/">← Volver al catálogo</Link>
        </div>
    );
}