const mongodb = require("mongodb");

const client = new mongodb.MongoClient("mongodb://localhost:27017/",
  { useNewUrlParser: true });

client.connect((err, client) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log("БД подключена\n");

  // CRUD:
  //
  // Create - создать.
  // Read - считать.
  // Update - обновить.
  // Delete - удалить.

  const db = client.db("usersdb");
  const users = db.collection("users");

  // Create

  users.insertOne({ name: "Иван", age: 17 },
    (err, result) => err
      ? console.log(err.message)
      : console.log("Вставлен документ\n", result.ops));

  users.insertMany([
      { name: "Дмитрий", age: 22 },
      { name: "Василий", age: 18 }
    ],
    (err, result) => err
      ? console.log(err.message)
      : console.log("Вставлены документы\n", result.ops));

  // Read

  users
    .find({ age: { $gte: 18 } })
    .toArray((err, result) => err
        ? console.log(err.message)
        : console.log("Получены документы\n", result.ops));

  users.findOne({ name: "Дмитрий" },
    (err, result) => err
        ? console.log(err.message)
        : console.log("Получен документ\n", result.ops));

  // Update

  users.updateOne({ name: "Иван" }, { $set: { name: "Алексей", age: 23 } },
    (err, result) => err
        ? console.log(err.message)
        : console.log("Обновлён документ\n", result.modifiedCount));

  users.updateMany({ name: "Алексей" }, { $set: { age: 24 } },
    (err, result) => err
        ? console.log(err.message)
        : console.log("Обновлены документы\n", result.modifiedCount));

  // Delete

  users.deleteOne({ name: "Василий" },
    (err, result) => err
        ? console.log(err.message)
        : console.log("Удалён документ\n", result.deletedCount));

  users.deleteMany({ name: "Алексей", age: 23 },
    (err, result) => err
        ? console.log(err.message)
        : console.log("Удалены документы\n", result.deletedCount));
});

// Закрываем соединение с БД при завершении работы сервера.
process.on('SIGINT',
  () => client.close(
    (err) => err
      ? console.log(err.message)
      : console.log("Cоединение с БД закрыто\n"))
);