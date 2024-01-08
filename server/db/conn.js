const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
// This handles the database connection to the cloud MongoDB Server
module.exports = {
  connectToServer: function (callback) {
    mongoose.connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    
      mongoose.connection
      .once('open', () => console.log('Connected to the MongoDB database via Mongoose.'))
      .on('error', (error) => {
          console.warn('Error : ', error);
      });
  },
};