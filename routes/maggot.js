const router = require('express').Router();
const MaggotController = require('../controllers/Maggot');
const verifyToken = require('../middlewares/auth.middleware');

router.post('/maggot/create', verifyToken, MaggotController.create);
router.put('/maggot/update', verifyToken, MaggotController.update);
router.delete('/maggot/delete', verifyToken, MaggotController.delete);
router.delete('/maggot/delete/all', verifyToken, MaggotController.deleteAll);
router.get('/maggot/all', verifyToken, MaggotController.getAll);
router.get('/maggot/:id', verifyToken, MaggotController.getOne);

module.exports = router;