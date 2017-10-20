const pets = require("../controllers/pets.js")
module.exports = function(app){

  app.get('/', pets.getAll);

  app.get('/createPet', pets.createPet);

  app.post('/create', pets.updatePet);
}
