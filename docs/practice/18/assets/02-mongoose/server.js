const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/usersdb",
  { useNewUrlParser: true },
  (err) => err
    ? console.log(err)
    : console.log("Cоединение с БД открыто\n"));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    mixlength: 3,
    maxlength: 30,
    required: true
  },
  pwd: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: true
  },
  curr: {
    type: Number,
    default: 0,
    min: 0
  }
});

const User = mongoose.model("User", userSchema);

let user = new User({
  name: "Иван",
  pwd: "12345",
  curr: 500
});
user.save((err) => err
  ? console.log(err.message)
  : console.log("Вставлен документ"));

User.create({
    name: "Иван",
    pwd: "12345",
    curr: 500
  },
  (err) => err
    ? console.log(err.message)
    : console.log("Вставлен документ"));

//User.find();
//User.updateMany();
//User.deleteMany();

// Закрываем соединение с БД при завершении работы сервера.
process.on('SIGINT',
  () => mongoose.disconnect(
    (err) => err
      ? console.log(err.message)
      : console.log("Cоединение с БД закрыто\n")));