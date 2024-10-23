// Load environment variables from a .env file
require('dotenv').config();
console.log('Environment Variables:', process.env);

const axios = require('axios');

// Log the site URL for debugging
console.log('NEXT_PUBLIC_SITE_URL:', process.env.NEXT_PUBLIC_SITE_URL);

// Function to get stocks from your API
async function fetchStocks() {
    const apiUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/stocks`;

    if (!process.env.NEXT_PUBLIC_SITE_URL) {
        console.error('NEXT_PUBLIC_SITE_URL is not defined. Please check your .env file.');
        return [];
    }

    try {
        const response = await axios.get(apiUrl); // Use the environment variable here
        return response.data;
    } catch (error) {
        console.error('Error fetching stocks:', error);
        return [];
    }
}

// Define a function to get stock data for multiple symbols
async function getStockData(symbol) {
    try {
        const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.NEXT_FINNHUB_PUBLIC_KEY}`); // Use the environment variable here
        const stockData = response.data;
        console.log(`Real-time stock data for ${symbol}:`, stockData);
    } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
    }
}

// Function to start polling the stock prices
async function startPolling() {
    const stocks = await fetchStocks();
    setInterval(() => {
        stocks.forEach(stock => {
            getStockData(stock.stockName);
        });
    }, 1000);
}

// Start polling with the stocks fetched from the API
startPolling();
