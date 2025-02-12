const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB Atlas');
  } catch (error) {
    console.error('❌ DB Connection Error:', error);
  }
};

module.exports = connectToDb;
