const Maggot = require('../models/MaggotData');

module.exports = {
  create: async (req, res) => {
    try {
      const maggotdata = new Maggot({
        initial_amount: req.body.initial_amount,
        initial_date: req.body.initial_date,
        harvest_amount: req.body.harvest_amount,
        harvest_date: req.body.harvest_date
      });
      const result = await maggotdata.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  update: async (req, res) => {
    try {
      const updateMaggotData = {
        initial_amount: req.body.initial_amount,
        initial_date: req.body.initial_date,
        harvest_amount: req.body.harvest_amount,
        harvest_date: req.body.harvest_date
      };
      const result = await Maggot.findByIdAndUpdate(req.body.id, updateMaggotData);
      result ? res.status(200).json(result) : res.status(400).json({message: 'bad request'});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  delete: async (req, res) => {
    try {
      await Maggot.findByIdAndRemove(req.body.id);
      res.status(204).json({message: 'maggot data deleted'});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const maggotdata = await Maggot.findById(req.params.id);
      maggotdata == null ? res.status(204).json({message: 'not found'}) : res.status(200).json(maggotdata);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const maggotdata = await Maggot.find({});
      res.status(200).json(maggotdata);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  deleteAll: async (req, res) => {
    try {
      await Maggot.remove({});
      res.status(204).json({
        message: 'maggot data deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
}