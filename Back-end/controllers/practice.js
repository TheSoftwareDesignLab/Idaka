const mdbconn = require('../lib/utils/mongo.js');

function getPractices() {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Practices').find({}).toArray();
  });
}
function getPracticesIR() {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Practices').find({}).project({'Practice':1,'_id':0}).toArray();
  });
}


function insertPractice(product) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Practices').insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}
function searchPractices(query) {
  console.log("dizque array",[query])
  const r=query.split(",").map(function(item) {
    return parseInt(item,10);
  });
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Practices').find({ _id: { $in: r} }).toArray(); // Si no se provee un ID, este será generado automáticamente
  });

}
function getPracticesByTask(query) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Practices').find({ Task: query }).toArray(); // Si no se provee un ID, este será generado automáticamente
  });

}
module.exports = [getPractices, insertPractice,searchPractices,getPracticesByTask,getPracticesIR];