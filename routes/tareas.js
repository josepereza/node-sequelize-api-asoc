var express = require('express');
var router = express.Router();
var models = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get('/', function(req, res) {
    res.send('esto son los usuarios');
  });
  
    router.post("/tarea", (req, res) => {
    console.log(req.body.nombre);
     models.Tarea.create({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        UsuarioId: req.body.UsuarioId
      }).then( (result) => res.json(result) )
    });
  
    router.put( "/tarea/:id", (req, res) =>
      models.Tarea.update({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        UsuarioId: req.body.UsuarioId
      },
      {
        where: {
            id:{ [Op.eq]: req.params.id}
          }
      }).then( (result) => res.json(result) )
    );
  
    router.delete( "/tarea/:id", (req, res) =>
      models.Tarea.destroy({
        where: {
            id:{ [Op.eq]: req.params.id}
          }
      }).then( (result) => res.json(result) )
    );
  
    router.get( "/tarea/:id", (req, res) =>
      models.Tarea.findByPk(req.params.id).then( (result) => res.json(result))
  );
  router.get( "/listado", (req, res) =>
      models.Tarea.findAll().then( (result) => res.json(result))
  );


  router.get("/lista_completa",(req,res)=>{
    models.Tarea.findAll({
      include: [{
          model: models.Usuario
         
      }]
    }).then((result)=> res.json(result))
    });
    
  

module.exports = router;
