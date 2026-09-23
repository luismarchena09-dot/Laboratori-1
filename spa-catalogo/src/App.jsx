import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Asegúrate de usar un solo punto "./" en ambas importaciones
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalogo />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
            </Routes>
        </BrowserRouter>
    );
}