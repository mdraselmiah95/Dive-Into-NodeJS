// Name, Email, Password and Profile 🛸

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxlength: 30,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
});
