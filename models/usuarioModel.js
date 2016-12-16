module.exports= function(sequelize, DataTypes){
	 return sequelize.define('Usuarios', {tipoUsuario: DataTypes.STRING,
		 observacion: DataTypes.STRING,
		 fecha: DataTypes.STRING									                                       	              }
                             );
}
