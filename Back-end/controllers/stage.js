const mdbconn = require('../lib/utils/mongo.js');

function getStages() {
  return mdbconn.conn().then((client) => {
    return client.db('MLBestPractices').collection('Stages').find({}).sort({_id:1}).toArray();
  });
}



module.exports = [getStages];