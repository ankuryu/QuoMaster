/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Quoitm = sequelize.define('Quoitm',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	  },
      qno: DataTypes.STRING,
      sr: DataTypes.STRING,
      desc: DataTypes.STRING,
      qty: DataTypes.DECIMAL,
      unt: DataTypes.STRING,
      rate: DataTypes.DECIMAL,
      disc: DataTypes.DECIMAL,
      tax: DataTypes.DECIMAL,
      cost: DataTypes.DECIMAL,
      fac: DataTypes.DECIMAL,
      incr: DataTypes.DECIMAL,
      nar: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
	return Quoitm ;
}
