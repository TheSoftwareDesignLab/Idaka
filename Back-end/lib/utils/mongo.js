
const process = require('process');
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://lhCabra:90XliwlVOeufRLmK@mlbestpractices.lddweqz.mongodb.net/?retryWrites=true&w=majority';

function MongoUtils() {
  const mu = {};

  // Esta función retorna una nueva conexión a MongoDB.
  // Tenga presente que es una promesa que deberá ser resuelta.
  mu.conn = () => {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return client.connect();
  };
  return mu;
}
module.exports = MongoUtils();