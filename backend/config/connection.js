const mongoose = require('mongoose');
mongoose.connect(
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


module.exports = mongoose.connection;
