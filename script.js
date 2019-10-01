
// let exchangeRate = 23200;

// function vndToUsd (vnd) { 
//  return vnd/exchangeRate;
// }

// function usdToVnd (usd) {
//  return usd*exchangeRate;
// }

// let currency = prompt ('Which currency do you have? (usd or vnd)');

//   if (currency == 'vnd') {
//     let amount_vnd = prompt ('How much vnd do you have?');

//     if (isNaN(currency)) {
//         alert ('Error: Please put number');
//         console.log ('result is not available')
//     } else {
//     console.log ('the converted amount is', vndToUsd (amount_vnd));
//     }

//   } else {
//     let amount_usd = prompt ('How much usd do you have?');
//     if (isNaN(currency)) {
//         alert ('Error: Please put number');
//         console.log ('result is not available')
//     } else {
//     console.log ('the converted amount is', usdToVnd (amount_usd));  
//     } 
// }

// let exchangeRate = 23200;

// let amount = document.getElementById ("amountTextBox")
// let converterButton = document.getElementById ("converterButton")
// let resultArea = document.getElementById ("result")
// let mySelector = document.getElementByid ("fromCurrency")

// converterButton.addEventListener("click",convert);

// function convert (){
//   let money = amount.value;
//   let fromCurrency = mySelector[mySelector.selectedIndex].value;
//   let convertAmount = money / exchangeRate;

//   resultArea.innerHTML = '


// const exchangeRate = {

//   "usd": {
//     "eur": 0.91,
//     "aud": 1.48,
//     "krw": 1203.00,
//     "vnd": 23200.70,
//   },
//   "eur": {
//     "usd": 1.09,
//     "aud": 1.62 ,
//     "krw": 1316.21,
//     "vnd": 25383.96,
//   },
//   "aud": {
//     "usd": 0.68,
//     "eur": 0.62,
//     "krw": 813.58,
//     "vnd": 15690.63,
//   },
//   "krw": {
//     "usd": 0.00083,
//     "aud": 0.0012,
//     "eur": 0.00076,
//     "vnd": 19.29,
//   },
//   "vnd": {
//     "krw": 0.052,
//     "usd": 0.000043,
//     "aud": 0.000064,
//     "eur": 0.000039,
//   },
// }

let amount = document.getElementById("amountTextBox");
let convertButton = document.getElementById("convertButton");
let result = document.getElementById("result");

convertButton.addEventListener("click", convert);


function convert() {
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  let money = amount.value;
  callApi(fromCurrency, toCurrency, money)
}


async function callApi(from, to, money) {
  let currency = from + '_' + to
  let url = `https://free.currencyconverterapi.com/api/v6/convert?q=` + currency + `&compact=y&apiKey=9c61db54f204b463e42d`;
  let result = await fetch(url);
  let json = await result.json();
  const exchangeRate = json[currency.toUpperCase()].val;
  let convertedValue = exchangeRate * money;
  console.log(convertedValue);
  document.getElementById('result').innerHTML = 'Here you go, exchanged amount is ' + convertedValue.toFixed(2)
}



function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: value,
    style: "currency"
  });
  return formatter.convert();
}