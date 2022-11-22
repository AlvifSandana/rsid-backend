const router = require('express').Router();
const MaggotController = require('../controllers/Maggot');

router.post('/maggot/create', MaggotController.create);
router.put('/maggot/update', MaggotController.update);
router.delete('/maggot/delete', MaggotController.delete);
router.delete('/maggot/delete/all', MaggotController.deleteAll);
router.get('/maggot/all', MaggotController.getAll);
router.get('/maggot/:id', MaggotController.getOne);

module.exports = router;