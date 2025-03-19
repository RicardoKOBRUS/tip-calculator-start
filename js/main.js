// @ts-nocheck

// https://flaviocopes.com/how-to-format-number-as-currency-javascript/
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

function updateTipAmounts() {
    // grab the meal cost from the page
    let mealCost = document.getElementById("mealCost").value;
    // populate the table with tip amounts
    document.getElementById('tip10').innerHTML = formatter.format(mealCost * 0.25);
    document.getElementById('tip15').innerHTML = formatter.format(mealCost * 0.15);
    document.getElementById('tip18').innerHTML = formatter.format(mealCost * 0.18);
    document.getElementById('tip20').innerHTML = formatter.format(mealCost * 0.20);
    document.getElementById('tip22').innerHTML = formatter.format(mealCost * 0.22);
    // populate the table with total + tip amounts
    document.getElementById('tot10').innerHTML = formatter.format(mealCost * 1.10);
    document.getElementById('tot15').innerHTML = formatter.format(mealCost * 1.15);
    document.getElementById('tot18').innerHTML = formatter.format(mealCost * 1.18);
    document.getElementById('tot20').innerHTML = formatter.format(mealCost * 1.20);
    document.getElementById('tot22').innerHTML = formatter.format(mealCost * 1.22);
}

// register the event listener for the input field
document.getElementById('mealCost').oninput = updateTipAmounts;
