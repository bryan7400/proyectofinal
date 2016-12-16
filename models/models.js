//obtenemos ruta en la que nos encontramos
var path = require("path");

//Se crea el modelo
var Sequelize = require("sequelize");

//Declaramos que haremos uso de sqlite
var sequelize= new Sequelize (null, null, null, {dialect:"sqlite", storage: "reclamoBD.sqlite"});

//importamos la definicion de la tabla que se encuentra en reclamoModel.js
var reclamo =sequelize.import (path.join(__dirname,'reclamoModel'));
exports.reclamo =reclamo; //se exporta la definicion

//importamos la definicion de la tabla que se encuentra en reclamoModel.js
var usuario =sequelize.import (path.join(__dirname,'usuarioModel'));
exports.usuario =usuario; //se exporta la definicion


//sequelize.sync() crea e inicializa la tabla. 
sequelize.sync().success (function(){
	//success ejecuta un manager una vez creada la tabla
   reclamo.count().success(function(count){
   	  //preguntamos si la tabla esta vacia
   	  if(count===0){
   	  	reclamo.create({
   	  		tipoReclamo: "Ejemplo Tipo Reclamo",
			   observacion: "",
			         fecha: ""
				}).success(function(){
   	  			console.log("Reclamos inicializado")
   	  		})
   	  }
   })
})
//sequelize.sync() crea e inicializa la tabla. 
sequelize.sync().success (function(){
   //success ejecuta un manager una vez creada la tabla
   usuario.count().success(function(count){
        //preguntamos si la tabla esta vacia
        if(count===0){
         usuario.create({
            tipoUsuario: "Ejemplo Tipo Usuario",
            observacion: "as",
                  fecha: "asd"
            }).success(function(){
               console.log("Usuarios inicializado")
            })
        }
   })
})  
