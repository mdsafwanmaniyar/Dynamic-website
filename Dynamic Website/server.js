const express = require('express');
const bodyParser = require('body-parser');
const { insertData } = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/signup', async (req, res) => {
    try {
        const data = req.body; // Assuming the request body contains an object with Email and Password
        const result = await insertData(data);
        res.status(201).send({ message: 'User registered successfully', result });
    } catch (error) {
        res.status(400).send({ message: 'Error inserting data', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
