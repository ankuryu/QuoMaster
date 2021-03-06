const path = require('path')

module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || 'quot218.db3',
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'user123',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../db/quot218.db3')
    }
  }
	//      storage: path.resolve(__dirname, '../../db/quot218.db3')
  /*,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  } */
}
