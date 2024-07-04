const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/fetch-manifests', async (req, res) => {
    try {
        const response = await axios.get('https://p6s64pjzub.execute-api.eu-west-1.amazonaws.com/dev/execute');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} :)`);
});
