/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Quoitm= sequelize.define('quoitm', 
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true 
	  },
    qno: DataType.STRING,
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
  );
}