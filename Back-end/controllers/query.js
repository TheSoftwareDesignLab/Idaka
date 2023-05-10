const { ObjectId } = require('mongodb');
const mdbconn = require('../lib/utils/mongo.js');

function getQueries() {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Queries').find({}).toArray();
  });
}

function insertQuery(product) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Queries').insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}
function updateQueryRate(id,new_rate) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Queries').updateOne( { _id: ObjectId(JSON.parse(id)) },
    {
      $set: {
        rate: new_rate
      }
    }); 
  });
}
function updatePracticeRate(id,new_rate,position) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Queries').updateOne( { _id: ObjectId(JSON.parse(id)), "practicesRetrieved.position":position },
    {
      $set: {
        
        "practicesRetrieved.$.rank" : new_rate
      }
    }); 
  });
}
module.exports = [getQueries, insertQuery, updateQueryRate,updatePracticeRate];