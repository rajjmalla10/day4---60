// app.js
import { countryList } from './codes.js';

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/";

const dropdowns = document.querySelectorAll(".dropdown select");

const allCurrency = Object.keys(countryList);

const fromCurr = document.querySelector(".from select")

const toCurr = document.querySelector(".to select")

const message = document.querySelector(".msg")

let btn = document.querySelector("button")



dropdowns.forEach(select=>{
  allCurrency.forEach(eachCurrency=>{
    let newOption = document.createElement("option")
    newOption.innerHTML = eachCurrency;
    newOption.value = eachCurrency;
    if(select.name === "from" && eachCurrency === "USD" ){
      newOption.selected = true;
    }else if (select.name === "To" && eachCurrency === "NPR"){
      newOption.selected = true;
    }
    select.appendChild(newOption)

  })
  select.addEventListener("change",(e)=>{
    updateFlag(e.target);
  })
})


const updateExchange = async ()=>{
  let amount = document.querySelector(".amount input")
  let amountValue = amount.value
  if(amountValue === "" || amountValue < 1 ){
    amountValue = 1;
    amount.value = "1";
    
  }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase}/${toCurr.value.toLowerCase}.json`
 // console.log(fromCurr.value,toCurr.value)
 try {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error fetching exchange rate:", error);
}
 let rate  = data[toCurr.value.toLowerCase]
 let finalAmount = amountValue * rate;
 message.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}





const updateFlag = (element) =>{
  let currencyCode = element.value
  console.log(currencyCode)
  let countryCode = countryList[currencyCode];
  console.log(countryCode)
  let newImage = `https://flagsapi.com/${countryCode}/flat/64.png`
  let img = element.parentElement.querySelector("img")
  img.src = newImage
  
}



btn.addEventListener("click",  (e)=>{
    e.preventDefault();
   updateExchange();

  })

window.addEventListener("load",()=>{
    updateExchange();
  })