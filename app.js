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
//-------CREATE----------//
//Insert one
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Fruits have to have a name!"]
  },
  rating: {
    type: Number,
    min: [1, "Minimum rating is 1"],
    max: [10, "Maximum rating is 10"]
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);


const fruit = new Fruit({
  //name: "Peach",
  rating: 10,
  review: "Peaches are lovely."
});

//fruit.save();

//Insert many
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 6,
//   review: "A bit bitter"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 5,
//   review: "Not a fan of the texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved fruits to fruitsDB");
//   }
// });


//Create person challenge
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  //Relationship
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

//person.save();

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit."
});

//pineapple.save();

const amy = new Person({
  name: "Amy",
  age: 19,
  favoriteFruit: pineapple
});

//amy.save();






//Mongoose find is located below commented out code
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

//--------READ--------//
//Find all
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    //console.log(fruits);

    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});


//-------UPDATE-------//
// Fruit.updateOne({_id: "5fa9de2f69268653e05a5533"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated the document");
//   }
// });

const lemon = new Fruit({
  name: "Lemon",
  rating: 7,
  review: "Sour!"
});

//lemon.save();

// Person.updateOne({name: "John"}, {favoriteFruit: lemon}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Person updated");
//   }
// })

//-----DELETE ONE-----//
// Fruit.deleteOne({_id: "5fa9de2f69268653e05a5533"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Sucessfully deleted document");
//   }
// });

//----DELETE MANY-----//
// Person.deleteMany({name: "John", age: 37}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Sucessfully deleted all specified documents");
//   }
// });
