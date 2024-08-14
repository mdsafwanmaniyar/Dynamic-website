const mongoose = require('mongoose');
const User = require('./models/User');

const url = 'mongodb://localhost:27017/yourDatabaseName';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to database'))
    .catch(err => console.error('Database connection error:', err));

async function insertData(data) {
    try {
        const user = new User(data);
        const result = await user.save();
        console.log('Data inserted:', result);
        return result;
    } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
    }
}

module.exports = { insertData };
