const knex = require("../db/knex.js");

module.exports = {

  getAll: (req, res) => {
    knex("petList")
      .then((results) => {
        console.log(results);
        res.render("index", { pets: results})
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      })
  },

  createPet: (req, res) => {
    res.render("createpet");
    console.log(200);
  },

  updatePet: (req, res) => {
    knex("petList")
      .insert({
        name: req.body.name,
        type: req.body.type,
        gender: req.body.gender
      }, "*")
      .then(() => {
        res.redirect("/")
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(400);
      })
  }
}
