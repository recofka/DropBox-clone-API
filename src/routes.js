const express = require('express');

const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FilleController');
const AllBoxesController = require('./controllers/AllBoxesController');

routes.get('/', (req, res) => res.send('basic server is running'));
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes/:id/file', multer(multerConfig).single('file'), FileController.store);
routes.get('/allboxes', AllBoxesController.showAll);

module.exports = routes;
