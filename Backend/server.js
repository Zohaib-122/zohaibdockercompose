const express = require('express');
const app = express();
const port = 5000;

app.get('/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
