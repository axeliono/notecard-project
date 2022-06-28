const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;
let mongo = undefined;
const connectDB = () => {
  return mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/flashhaven',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error('Connection to DB failed');
      } else {
        console.log('Connection to DB successful');
      }
    }
  );
};

module.exports.dropCollections = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
};

module.exports.dropDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  mongo.stop();
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed'));
module.exports = { connectDB, db };
