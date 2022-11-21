const Action = require('../models/Action');

module.exports = {
  create: async (req, res) => {
    try {
      const actiondata = new Action({
        origin: req.body.origin,
        message: req.body.message
      })
      const result = await actiondata.save();
      res.json(result);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const result = await Action.find({});
      res.status(200).json({result});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  deleteAll: async (req, res) => {
    try {
      await Action.remove({});
      res.status(204).json({
        message: 'Actions deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  }
}