Para instalar realizar los siguientes pasos:

clonar el repositorio con git clone
npm i
En ambiente desarrollo ejecutar 'npm run dev'
Para compilar npm run build
Para levantar en ambiente productivo en local ejecutar 'npm run dev'

Descipción APP

Se utilizo:
- React version 18
- Redux Toolkit para el manejo de acciones y estados
- reactContext para el manejar el inicio de sesión
- localStorage para mantener los productos nuevos, actualizaciones y borrados
- ReactRouter version 6
- Vite para la creación del proyecto ya que el hot module replacement es muy rápido

Esta es una aplicación web creada en React 18. Se encarga de consumir los endpoints de la web https://restful-api.dev/

- Al inicio se simula un login donde solo hay que hacer click en login y podra acceder a la pantalla del dashboard, si no se hace click en login no permitira acceder a otra pantalla
- Una vez dentro del dashboard se encuentran los productos iniciales de la api, maquetados sobre una tabla y mostrando su información.
- Acá podrá crear un nuevo producto, actualizar un producto y eliminar el producto (Para actualizar o eliminar primero tendrá que crear uno nuevo para poder actualizarlo o eliminarlo)
- Acá podra buscar por nombre de producto (Primero inserte el nombre y luego presiona enter para buscar el producto, para volver a mostrar todos solo presione enter con el input vacío).
- Acá podra paginar por cada 3 productos