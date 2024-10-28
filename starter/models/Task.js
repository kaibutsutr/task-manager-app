const mongoose = require("mongoose"); //invoke mongoose

const TaskSchema = new mongoose.Schema({
  // create a new data class with params
  //this method has no validation so it doesnt deal with empty values and required fields
  // name:String,          // name is string and completed is bool value.
  // completed:Boolean,
  name: {
    type: String,
    required: [true, "must provide a name"], // throw an error if req field is empty
    trim: true, //get rid of empty spaces
    maxlenght: [true, "too many characters"], // max char limit
  },
  completed: {
    type: Boolean, // type of
    default: false, //default value of bool is false so we know if its not completed.
  },
});

module.exports = mongoose.model("Task", TaskSchema);
