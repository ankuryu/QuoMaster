/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Quotc = sequelize.define('quotc',
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true
	  },
      qno: DataType.STRING,
      vld: DataTypes.DECIMAL,
      vldunt: DataTypes.STRING,
      pmt: DataTypes.DECIMAL,
      pmtunt: DataTypes.STRING,
      dlvtm: DataTypes.DECIMAL,
      dlvunt: DataTypes.STRING,
      dlvloc: DataTypes.STRING,
      tax: DataTypes.DECIMAL,
      disc: DataTypes.DECIMAL,
      wrt: DataTypes.STRING,
      nar: DataTypes.STRING
    },
    { freezeTableName: true,
      timestamps: false
    }
  )
}
