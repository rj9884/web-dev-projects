const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const btn = document.querySelector("#exchange-btn");
const selects = document.querySelectorAll(".select-container select");

for(let select of selects){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
    }
}
const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".input-box input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amountVal = 1;
        amount.value = "1";
    }
})