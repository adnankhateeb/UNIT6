const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      gender: { type: String, required: true },
      DOB: { type: String, required: true },
   },
   {
      versionKey: false,
      timestamps: true,
   }
);

const UserSchema = mongoose.model("user", userSchema);

module.exports = UserSchema;
