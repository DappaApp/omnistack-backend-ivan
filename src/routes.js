const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
// USA-SE single PARA 1 ARQUIVO, USA-SE array PARA VARIOS ARQUIVOS
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;