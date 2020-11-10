//----------------ALL COMMENTED OUT CODE WAS FOR NATIVE MONGODB DRIVER-----------------------


// const { MongoClient } = require('mongodb');
// const assert = require('assert');
//

//This section is all replaced by the connect() method of the mongoose object

// //Connection URL
// const url = 'mongodb://localhost:27017';
//
// //Database Name
// const dbName = 'fruitsDB';
//
// //Create a new MongoClient
// const client = new MongoClient(url, {useUnifiedTopology: true});
//
// //Use connect method to connect to the Server
// client.connect(function(err){
//   assert.equal(null, err);
//   console.log("Connected successfully to the server");
//
//   const db = client.db(dbName);
//   findDocuments(db, function(){
//     client.close();
//   });
// });
//

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",  {useNewUrlParser: true, useUnifiedTopology: true});


//Insert documents replaced by Schema, model, and save located below

// const insertDocuments = function(db, callback){
//   //Get the documents collection
//   const collection = db.collection('fruits');
//
//   //insert some insertDocuments
//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 8,
//       review: "Great fruit"
//     },
//     {
//       name: "Orange",
//       score: 9,
//       review: "Tasty"
//     },
//     {
//       name: "Banana",
//       score: 6,
//       review: "I enjoy this more in bread than by itself"
//     }
//   ], function(err, result){
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//   });
// }

//Insert one
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
  name: "Apple",
  rating: 8,
  review: "Great fruit."
});

//fruit.save();

//Insert many
const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "A bit bitter"
});

const banana = new Fruit({
  name: "Banana",
  score: 5,
  review: "Not a fan of the texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully saved fruits to fruit db");
  }
});



const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

//person.save();






//
// const findDocuments = function(db, callback){
//   //get the documents collection
//   const collection = db.collection('fruits');
//   //find some documents
//   collection.find({}).toArray(function(err, fruits){
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }

//----------------ALL THE FOLLOWING CODE IS FOR MONGOOSE--------------------
