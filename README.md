# Mongoose-Essentials
All you need to start learning mongoose.

## Install mongoose

npm install mongoose

## Require mongoose

const mongoose = require('mongoose');

## Connect to the local server

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', {useNewUrlParser: true})
  .then(() => console.log('Connected!'));

## Create a schema

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Give a fucking name!"]
    },
    rating: Number,
    review: String
});

## Create a model on the specified schema

const Fruit = mongoose.model("Fruit", fruitSchema);

## Create an object on the model of fruit

const fruit = new Fruit({
    // name: "Apple",
    rating: 7,
    review: "Pretty good"
});

## Insert only object/document in to the database

fruit.save().catch(err => {
    console.error('Error executing find:', err.name);
  });

const kiwi = new Fruit({
    name: "kiwi",
    rating: 8,
    review: "Pretty amazing"
});

const banana = new Fruit({
    name: "Apple",
    rating: 9,
    review: "Pretty fabulous"
});

## Save many objects/documents in to the database

Fruit.insertMany([kiwi, banana]).catch(err => {
    console.log(err);
    mongoose.connection.close();
});

## Show data of the specified collection/model

Fruit.find({})
.then(users => {
  console.log('Found the following users:');
  users.forEach(function(user){
    console.log(user.name);
  });

  // Close the connection
})
.catch(err => {
  console.error('Error executing find:', err);
});

## Update only object/document of the specified collection/model on the specified condition

Fruit.updateOne({name: "Apple"}, {name: "Dragon Fruit"}).catch(function(err){
    console.log(err);
});

People.updateMany({name: "Apple"}, {name: "Dragon Fruit"}).catch(function(err){
    console.log(err);
});

## Delete only object/document of the specified collection/model on the specified condition

Fruit.deleteOne({name: "Dragon Fruit"}).catch(function(err){
    console.log(err);
});

## Delete Many object/document of the specified collection/model on the specified condition

Fruit.deleteMany({name: "Apple"}).catch(function(err){
    console.log(err);
});

## Close connection

mongoose.connection.close()
