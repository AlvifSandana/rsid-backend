const router = require('express').Router();
const ActioController = require('../controllers/Action');

router.get('/action', ActioController.getAll);
router.post('/action/create', ActioController.create);
router.delete('/action/delete', ActioController.deleteAll);

module.exports = router;