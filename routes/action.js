const router = require('express').Router();
const ActioController = require('../controllers/Action');
const verifyToken = require('../middlewares/auth.middleware');

router.get('/action', verifyToken, ActioController.getAll);
router.post('/action/create', ActioController.create);
router.delete('/action/delete', ActioController.deleteAll);

module.exports = router;