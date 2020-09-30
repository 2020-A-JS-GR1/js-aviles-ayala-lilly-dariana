/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'post /tipoProducto/registrar': 'tipoProductoController.Registrar',
  'post /tipoProducto/listar': 'tipoProductoController.Listar',
  'post /tipoProducto/actualizar': 'tipoProductoController.Actualizar',
  'post /tipoProducto/eliminar': 'tipoProductoController.Eliminar',
  'post /tipoProducto/obtener': 'tipoProductoController.Obtener',


  'post /Producto/registrar': 'ProductoController.Registrar',
  'post /Producto/listar': 'ProductoController.Listar',
  'post /Producto/actualizar': 'ProductoController.Actualizar',
  'post /Producto/eliminar': 'ProductoController.Eliminar',
  'post /Producto/obtener': 'ProductoController.Obtener',
};
