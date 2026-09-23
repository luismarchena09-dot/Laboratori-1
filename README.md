# Laboratorios 1 y 2 - Programación Web IV

## Parte 1: Bitácora de Diagnóstico HTTP
Al consumir la API pública con Postman/curl, se registraron los siguientes comportamientos en el ciclo petición-respuesta:

* **Petición GET:** Devuelve un código de estado `200 OK`, indicando que la lectura del recurso fue exitosa.
* **Petición POST:** Devuelve un código de estado `201 Created`, confirmando la inserción de un nuevo dato.
* **Petición DELETE:** Devuelve un código de estado `204 No Content`, indicando que la eliminación fue exitosa pero no hay un cuerpo (body) que retornar.

## Parte 2: Análisis Comparativo (MVC vs. Headless/SPA)
Análisis técnico asumiendo un requerimiento de e-commerce en expansión (futura app móvil).

| Criterio | Monolito (MVC con PHP) | Desacoplado (SPA React / Headless) |
| :--- | :--- | :--- |
| **Tiempo de desarrollo inicial** | Más rápido al inicio. Backend y frontend comparten el mismo proyecto y despliegue. | Requiere mayor configuración inicial (CORS, endpoints REST, enrutadores de cliente). |
| **Facilidad de mantenimiento** | Baja a escala. La lógica de presentación está muy acoplada al servidor. Modificar la vista afecta el backend. | Alta. Al separar responsabilidades, los equipos de frontend y backend trabajan y prueban de forma independiente. |
| **Viabilidad para App Móvil** | Nula/Baja. Las vistas HTML generadas por el servidor MVC no sirven para una aplicación móvil nativa. | Excelente. Una futura app móvil consumirá exactamente la misma API JSON que ya alimenta a la SPA. |