const route = require('express').Router();
const TrashController = require('../controllers/Trash');
const verifyToken = require('../middlewares/auth.middleware');

route.post('/trash/create', verifyToken, TrashController.create);
route.put('/trash/update', verifyToken, TrashController.update);
route.delete('/trash/delete', verifyToken, TrashController.delete);
route.get('/trash/all', verifyToken, TrashController.getAll);
route.get('/trash', verifyToken, TrashController.getOne);

module.exports = route;