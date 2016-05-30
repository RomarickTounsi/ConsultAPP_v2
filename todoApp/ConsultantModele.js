var mongoose = require("mongoose");

var ConsultantSchema = new mongoose.Schema({
  First_name: {
    type: String,
    index: true
  },
  Last_name: {
    type: String,
    index: true
  },
  Competences: {
    type: String,
    index: true
  },
  Projet: {
    type: String,
    index: true
  },
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true
  }
});

var Consultant = mongoose.model('Consultant', ConsultantSchema);

module.exports = {
  
}