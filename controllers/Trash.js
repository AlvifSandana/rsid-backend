const Trash = require('../models/TrashData');

module.exports = {
  create: async (req, res) => {
    try {
      const trashdata = new Trash({
        trash_type: req.body.trash_type,
        trash_weight: req.body.trash_weight,
        input_date: req.body.input_date
      });
      const result = await trashdata.save();
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  update: async (req, res) => {
    try {
      const updateTrashData = {
        trash_type: req.body.trash_type,
        trash_weight: req.body.trash_weight,
        input_date: req.body.input_date
      };
      const result = await Trash.findByIdAndUpdate(req.body.id, updateTrashData);
      result != null ? res.status(200).json(result) : res.status(400).json({message: 'bad request'});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  delete: async (req, res) => {
    try {
      const trashdata = new Trash.findByIdAndRemove(req.body.id);
      trashdata ? res.status(204).json({message: 'trash data deleted'}) : res.status(400).json({message: 'bad request'});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const trashdata = await Trash.findById(req.body.id);
      trashdata == null ? res.status(204).json({message: 'not found'}) : res.status(200).json(trashdata);
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const trashdata = await Trash.find({});
      trashdata.length > 0 ? res.status(200).json(trashdata) : res.status(204).json({message: 'not available'});
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  },
}