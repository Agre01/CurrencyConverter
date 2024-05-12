async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");


    const API_KEY = "cc15471440749fd19bb0d2d7";
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        const result = data.conversion_result;
        resultElement.textContent = result.toFixed(2);
    } catch (error) {
        console.error("Error fetching data: ", error);
        resultElement.textContent = "Error converting currency.";
    }
}