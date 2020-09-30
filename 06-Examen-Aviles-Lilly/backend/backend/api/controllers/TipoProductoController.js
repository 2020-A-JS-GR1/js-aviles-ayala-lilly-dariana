/**
 * TipoProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const TipoProducto = require("../models/TipoProducto");

module.exports = {
  'Registrar':function(req,res){
      var datos = req.body;
      TipoProducto.create({
       categoria:datos.categoria,
       descripcion:datos.descripcion,
        estado:datos.estado,
        publico:datos.publico,

      }).fetch().then(
        () =>{
            return res.status(200).json({mensaje:`El génerp del anime se registró exitosamente`});
          }
      ).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  },
  'Listar':async function(req,res){
      var tiposProductos=await TipoProducto.find()
      return res.status(200).json(tiposProductos);
  },
  'Actualizar':function(req,res){
      var datos = req.body;
      TipoProducto.update({
          id:datos.id,
      }).set({
        categoria:datos.categoria,
        descripcion:datos.descripcion,
        estado:datos.estado,
        publico:datos.publico
      }).fetch().then(
        () =>{
            return res.status(200).json({mensaje:`El género del anime se actualizó exitosamente`});
          }
      ).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  },
  'Eliminar':async function(req,res){
      var datos = req.body;
      await Producto.destroy({
        tipo:datos.id,
      });
      await TipoProducto.destroy({
        id:datos.id,
      })
  },
  'Obtener':async function(req,res){
      var datos= req.body;
      sails.log(datos);
     await TipoProducto.findOne({
          id:datos.id,
      }).then((elemento)=>{
          if(!elemento){
              return res.status(200).json({mensaje:`No existe`})
          }
        return res.status(200).json(elemento);
      }).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  }

};

