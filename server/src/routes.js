/* const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const isAuthenticated = require('./policies/isAuthenticated')
*/
const QuotesController = require('./controllers/QuotesController.js')

module.exports = (app) => {
  /*
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
*/
  app.get('/quotes',
    QuotesController.index)
  app.get('/quotes/:qno',
    QuotesController.show)
  app.put('/quotes/:qno',
    QuotesController.put)
  app.post('/quotes',
    QuotesController.post)
  app.delete('/quotes/:qno',
    QuotesController.remove)

  app.get('/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.remove)

  app.get('/histories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/histories',
    isAuthenticated,
    HistoriesController.post)
}
