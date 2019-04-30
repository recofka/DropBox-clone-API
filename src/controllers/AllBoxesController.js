/* eslint-disable class-methods-use-this */
const Box = require('../models/Box');

class AllBoxesController {
  async showAll(req, res) {
    const box = await Box.find();
    return res.json(box);
  }
}

module.exports = new AllBoxesController();
