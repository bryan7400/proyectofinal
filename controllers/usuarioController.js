var models = require('../models/models.js');


exports.principal = function(req, res, next) {
                 models.usuario.findAll().then( function(usuarios){
                       res.render('index',{ title:'Proyecto Final', 
                         subtitle: 'Avances en computacion',
                          usuarios: usuarios
                             });
                              });
                 models.reclamo.findAll().then( function(reclamos){
                       res.render('index',{ title:'Proyecto Final', 
                         subtitle: 'Avances en computacion',
                          reclamos: reclamos
                             });
                              });       
					 }
exports.registroUsuario = function(req, res) {
  var usuario = {tipoUsuario:'Odeco',observacion:'',fecha:''}
 		              res.render('registroUsuario', {usuario:usuario});
                  
		   };
exports.guardarUsuario = function(req, res) {

	console.log("ingresa a guardar");
	usuario = models.usuario.build (req.body.usuario);
    //a continuacion guardamos los campos que recibimos del formulario
    usuario.save	({fields:["tipoUsuario",
    					      "observacion",
    					      "fecha"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirect");
    			 	res.render('respuestaUsuario', {mensaje:'Se registro el usuario con exito'});
    			 });  	
console.log(usuario);
console.log(reclamo);
                                              };
