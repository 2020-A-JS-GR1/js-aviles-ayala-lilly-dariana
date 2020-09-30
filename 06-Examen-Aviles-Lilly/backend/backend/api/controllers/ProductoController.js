/**
 * ProductoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const Producto = require("../models/Producto");

module.exports = {
  'Registrar':function(req,res){
      var datos = req.body;
      datos.subtitulo=(datos.subtitulo=="")?false:true;
      Producto.create({
       nombre:datos.nombre,
       descripcion:datos.descripcion,
       anio:datos.anio,
       subtitulo:datos.subtitulo,
       calificacion:datos.calificacion,
       imagen:datos.imagen,
       tipoProducto:datos.idTipo
      }).fetch().then(
        () =>{
            return res.status(200).json({mensaje:`El anime se ha registrado exitosamente`});
          }
      ).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  },
  'Listar':async function(req,res){
      var datos=req.body;
      var producto=await Producto.find().populate('tipoProducto');
      return res.status(200).json(producto);
  },
  'Actualizar':function(req,res){
      var datos = req.body;
      Producto.update({
          id:datos.id,
      }).set({
        nombre:datos.nombre,
        descripcion:datos.descripcion,
        anio:datos.anio,
        subtitulo:datos.subtitulo,
        calificacion:datos.calificacion,
        imagen:datos.imagen,
        tipoProducto:datos.idTipo
      }).fetch().then(
        () =>{
            return res.status(200).json({mensaje:`El anime se ha actualizado exitosamente`});
          }
      ).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  },
  'Eliminar': async function(req,res){
      var datos = req.body;
      sails.log(datos);
      await Producto.destroy({
        id:datos.id,
      })
  },
  'Obtener':function(req,res){
      var datos= req.body;
      Producto.findOne({
          id:datos.id,
      }).then((elemento)=>{
        return res.status(200).json(elemento);
      }).catch(
        () =>{
            return res.status(400).json({mensaje:`Ocurrió un error`});
          }
      )
  }

};

