const getAllRates = async (req, res) => {

    // get base rate from params
    let { base } = req.params

    // fetch rates
    let rates = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=USD,EUR,CAD,JPY,AUD,CHF,CNY,NZD,ZAR,RUB,BRL&base=${base}`, {
        headers: {
            apikey: process.env.EX_RATES_API_KEY
        }
    })

    // convert json to object
    let ratesObject = await rates.json();

    // response
    res.json(ratesObject);
}

module.exports = { getAllRates };