const { ObjectId } = require('mongodb');
const mdbconn = require('../lib/utils/mongo.js');

function getTasks() {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('TasksWithPractices').find({}).toArray();
  });
}
module.exports = [getTasks];