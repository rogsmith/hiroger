import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const client = new MongoClient('mongodb+srv://hirogerdev:aussie1234@cluster0.eqqvh.mongodb.net/hiroger_dev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('hiroger_dev');
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;

