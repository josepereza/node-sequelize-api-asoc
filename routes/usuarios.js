var express = require('express');
var router = express.Router();

var models = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('esto son los usuarios');
});

  router.post("/usuario", (req, res) => {
  console.log(req.body.nombre);
   models.Usuario.create({
      nombre: req.body.nombre,
      poblacion: req.body.poblacion,
      saldo: req.body.saldo
    }).then( (result) => res.json(result) )
  });

  router.put( "/usuario/:id", (req, res) =>
    models.Usuario.update({
      nombre: req.body.nombre,
      poblacion: req.body.poblacion,
      saldo: req.body.saldo
    },
    {
      where: {
        id:{ [Op.eq]: req.params.id}
      }
    }).then( (result) => res.json(result) )
  );

  router.delete( "/usuario/:id", (req, res) =>
    models.Usuario.destroy({
      where: {
        id:{ [Op.eq]: req.params.id}
      }
    }).then( (result) => res.json(result) )
  );

  router.get( "/usuario/:id", (req, res) =>
   models.Usuario.findByPk(req.params.id).then( (result) => res.json(result))
);
router.get( "/listado", (req, res) =>
    models.Usuario.findAll().then( (result) => res.json(result))
);

router.get("/lista_completa",(req,res)=>{
  models.Usuario.findAll({
    include: [{
        model: models.Tarea
       
    }]
  }).then((result)=> res.json(result))
  });


module.exports = router;
