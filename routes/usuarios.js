var express = require('express');
var router = express.Router();

const Usuario=require('../models').Usuario
const Tarea=require('../models').Tarea
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('esto son los usuarios');
});

  router.post("/usuario", (req, res) => {
  console.log(req.body.nombre);
   Usuario.create({
      nombre: req.body.nombre,
      poblacion: req.body.poblacion,
      saldo: req.body.saldo
    }).then( (result) => res.json(result) )
  });

  router.put( "/usuario/:id", (req, res) =>
    Usuario.update({
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
    Usuario.destroy({
      where: {
        id:{ [Op.eq]: req.params.id}
      }
    }).then( (result) => res.json(result) )
  );

  router.get( "/usuario/:id", (req, res) =>
    Usuario.findByPk(req.params.id).then( (result) => res.json(result))
);
router.get( "/listado", (req, res) =>
    Usuario.findAll().then( (result) => res.json(result))
);

router.get("/lista_completa",(req,res)=>{
  Usuario.findAll({
    include: [{
        model: Tarea
       
    }]
  }).then((result)=> res.json(result))
  });


module.exports = router;
