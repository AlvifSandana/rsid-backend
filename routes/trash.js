const route = require('express').Router();
const TrashController = require('../controllers/Trash');

route.post('/trash/create', TrashController.create);
route.put('/trash/update', TrashController.update);
route.delete('/trash/delete', TrashController.delete);
route.get('/trash/all', TrashController.getAll);
route.get('/trash', TrashController.getOne);

module.exports = route;