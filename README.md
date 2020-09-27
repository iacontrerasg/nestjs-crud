## Descripción

Backend de prueba técnica Roomie - Isaac Contreras
Se encuentra disponible el deploy de producción en:
https://roomie-backend.herokuapp.com/productos

## Instalación

Instalar dependencias con yarn

\$ yarn install

## Ejecución

Ejecutar aplicación con yarn, por defecto se ejecutará en el puerto 3000

# Development

\$ yarn start

## Variables

Las credenciales de la base de datos se encuentran en la variable de entorno DB_AUTH

Para fines de testing, se realiza el fallback al string de conexión proporcionado

## Endpoints

# GET /productos

Lista todos los productos

# GET /productos/:id

Lista un producto en especifico

# PUT /productos/:id

Actualiza un producto en especifico

# DELETE /productos/:id

Elimina un producto
