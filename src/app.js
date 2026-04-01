const baseURL = "https://www.alphavantage.co/query";
const apiKey = "0LKLCA49QU64GWMR";

async function fetchStock(symbol) {
    const url = `${baseURL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

