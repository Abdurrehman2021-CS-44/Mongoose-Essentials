// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', {useNewUrlParser: true})
//   .then(() => console.log('Connected!'));

// const fruitSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Give a fucking name!"]
//     },
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//     // name: "Apple",
//     rating: 7,
//     review: "Pretty good"
// });

// fruit.save().catch(err => {
//     console.error('Error executing find:', err.name);
//   });

// const peopleSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const People = mongoose.model("People", peopleSchema);

// const people = new People({
//     name: "John",
//     age: 37
// });

// people.save();

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 8,
//     review: "Pretty amazing"
// });

// const banana = new Fruit({
//     name: "Apple",
//     rating: 9,
//     review: "Pretty fabulous"
// });

// Fruit.insertMany([kiwi, banana]).catch(err => {
//     console.log(err);
//     mongoose.connection.close();
// });

// Fruit.find({})
// .then(users => {
//   console.log('Found the following users:');
//   users.forEach(function(user){
//     console.log(user.name);
//   });

//   // Close the connection
// })
// .catch(err => {
//   console.error('Error executing find:', err);
// });

// Fruit.updateOne({name: "Apple"}, {name: "Dragon Fruit"}).catch(function(err){
//     console.log(err);
// });

// Fruit.deleteOne({name: "Dragon Fruit"}).catch(function(err){
//     console.log(err);
// });

// People.deleteMany({name: "John"}).catch(function(err){
//     console.log(err);
// });

