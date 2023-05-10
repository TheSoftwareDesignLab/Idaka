const { ObjectId } = require('mongodb');
const mdbconn = require('../lib/utils/mongo.js');


function insertSynonym(product) {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Synonyms').insertOne(product); // Si no se provee un ID, este será generado automáticamente
  });
}
module.exports = [insertSynonym];