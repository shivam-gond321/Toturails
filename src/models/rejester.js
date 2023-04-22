const mongoose = require("mongoose");
const Rejesterd = new mongoose.Schema({
  Fname: {
    type: String,
  },
  Femail: {
    type: String,
  },
  Ftext: {
    type: String,
  },
});

const email = mongoose.model("Companrtty", Rejesterd);

module.exports = email;
