import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Catalogo() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/api/productos.json')
            .then(respuesta => respuesta.json())
            .then(datos => setProductos(datos))
            .catch(error => console.error("Error cargando los productos:", error));
    }, []);

    return (
        <div>
            <h2>Catálogo de Productos (SPA)</h2>
            {productos.length === 0 ? (
                <p>Cargando productos...</p>
            ) : (
                <ul>
                    {productos.map(producto => (
                        <li key={producto.id}>
                            <Link to={`/producto/${producto.id}`}>{producto.nombre}</Link> - ${producto.precio}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}