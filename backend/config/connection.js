const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = () => {
  return mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/flashhaven',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    err => {
        if(err) {
            console.error('Connection to DB failed');
        } else {
            console.log('Connection to DB successful');
        }
    }
  );
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed'));
module.exports = connectDB;
