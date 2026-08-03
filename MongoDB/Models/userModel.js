const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 128,
      minlength: 2,
      required: true,
      trim: true,
    },

    course: {
      type: String,
      // enum:["MERN","JAVA"],
      // default:"MERN",
      maxlength: 128,
      uppercase:true,
      minlength: 2,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      minlength: 12,
      maxlength: 128,
      unique: true,
      trim: true,
      required: true,
    },
    roll: {
      type: Number,
      required: true,
    },
    stream: {
      type: String,
      minlength: 2,
      maxlength: 128,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
