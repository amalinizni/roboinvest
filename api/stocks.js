// Example in Node.js (Express)
const express = require('express');
const app = express();

const stocks = [
    { $id: "1", stockName: "AAPL" },
    { $id: "2", stockName: "TSLA" },
    // Add more stocks as needed
];

app.get('/api/stocks', (req, res) => {
    res.json(stocks);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
