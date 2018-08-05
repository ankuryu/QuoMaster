/* const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const isAuthenticated = require('./policies/isAuthenticated')
*/
const QuotesController = require('./controllers/QuotesController.js')
const ItemsController = require('./controllers/ItemsController.js');
const TncController = require('./controllers/TncController.js');


module.exports = (app) => {
  /*
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
*/
  app.get('/api/quotes',
    QuotesController.index)
  app.get('/api/quotes/:id',
    QuotesController.show)
  app.put('/api/quotes/:id',
    QuotesController.put)
  app.post('/api/quotes',
    QuotesController.post)
  app.delete('/api/quotes/:id',
    QuotesController.remove)

  app.get('/api/items',
    ItemsController.index)
  app.post('/api/items/add',
   ItemsController.additms)
  app.get('/api/items/:id',
    ItemsController.put)
  app.post('/api/items',
    ItemsController.post)
  app.delete('/api/items/:id',
    ItemsController.remove)

  app.get('/api/tnc',
    TncController.index)
  app.get('/api/tnc/:id',
    TncController.show)
  app.put('/api/tnc/:id',
    TncController.put)
  app.post('/api/tnc',
    TncController.post)
  /*app.delete('/api/tnc/:id',
    TncController.remove)
*/
	/*
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
	*/
}
