
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const year = document.getElementById("year");
const rate = document.getElementById("rate");

form.addEventListener("submit" ,(event) => {
    event.preventDefault();
    const actualAmount = amount.value;
    const actualYear = year.value;
    const actualRate = rate.value;
    console.log(actualAmount);
    console.log(actualYear);
    console.log(actualRate);
})