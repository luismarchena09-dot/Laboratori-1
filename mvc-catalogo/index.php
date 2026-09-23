<?php
// Punto de entrada principal (Front Controller)
// Redirige la petición inicial hacia el controlador correspondiente

require_once 'controllers/ProductoController.php';

try {
    $controlador = new ProductoController();
    $controlador->listar();
} catch (Exception $e) {
    // Manejo básico de errores para evitar exponer fallos de la aplicación
    http_response_code(500);
    echo "<h1>Error al contactar con el servidor</h1>";
    echo "<p>" . htmlspecialchars($e->getMessage()) . "</p>";
}