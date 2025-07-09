
const form = document.getElementById("form");
const amount = document.getElementById("amount");
const year = document.getElementById("year");
const rate = document.getElementById("rate");
const monthlyPay = document.getElementById("monthlyRepay");
const yearlyPay = document.getElementById("totalRepay");
const clear = document.getElementById('clear')
let month
let totalPay;
let valueType;

form.addEventListener("submit" ,(event) => {
    event.preventDefault();
    const actualAmount = amount.value;
    const actualYear = year.value;
    const actualRate = rate.value;
    const type = document.getElementsByName('type');
    for (let i = 0; i < type.length; i++) {
        if (type[i].checked){
            valueType = type[i].value;
            console.log(valueType);

            if(valueType === "Interest")
            {
                totalPay = (actualAmount/(actualYear * actualRate));
                monthlyPay.innerText = `£${totalPay}`;
            }

            else if(valueType === "Repayment")
            {
                month = (actualAmount/ actualRate);
                yearlyPay.innerText = `£${month}`;
            }
        }

    };
    console.log(totalPay);

})

clear.addEventListener("click", () => {
    form.reset();
})