/* JSHINT ES6 VERSION */
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('quotop', 
	  {
	  id: { type: DataTypes.INTEGER,
		  primaryKey: true 
	  },
    qno: DataType.STRING,
    qdt: DataTypes.STRING,
    pname: DataTypes.STRING,
    paddr: DataTypes.STRING,
    enqno: DataTypes.STRING,
    enqdt: DataTypes.STRING,
    tel: DataTypes.STRING,
    email: DataTypes.TEXT,
    contact: DataTypes.TEXT
  },
  { freezeTableName: true,
    timestamps: false
  }
  );
}