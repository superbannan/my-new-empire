let money = 0;
let clickValue = 1;
let upgrade1Cost = 10;
let upgrade2Cost = 100;
let upgrade3Cost = 1000;
let cheatActive = false;

// Elements
const moneyDisplay = document.getElementById('money-amount');
const clickButton = document.getElementById('click-button');
const upgrade1Button = document.getElementById('upgrade1-button');
const upgrade2Button = document.getElementById('upgrade2-button');
const upgrade3Button = document.getElementById('upgrade3-button');
const cheatInput = document.getElementById('cheat-input');
const cheatButton = document.getElementById('cheat-button');

function updateMoneyDisplay() {
    moneyDisplay.innerText = money;
}

// Click Button - Add money
clickButton.addEventListener('click', () => {
    money += clickValue;
    updateMoneyDisplay();
});

// Upgrade 1 - Double the click value
upgrade1Button.addEventListener('click', () => {
    if (money >= upgrade1Cost) {
        money -= upgrade1Cost;
        clickValue *= 2;
        upgrade1Cost = Math.min(upgrade1Cost * 10, 100000); // Increase cost for next upgrade
        updateMoneyDisplay();
        document.getElementById('upgrade1-cost').innerText = upgrade1Cost;
    }
});

// Upgrade 2 - Double the click value
upgrade2Button.addEventListener('click', () => {
    if (money >= upgrade2Cost) {
        money -= upgrade2Cost;
        clickValue *= 2;
        upgrade2Cost = Math.min(upgrade2Cost * 10, 100000); // Increase cost for next upgrade
        updateMoneyDisplay();
        document.getElementById('upgrade2-cost').innerText = upgrade2Cost;
    }
});

// Upgrade 3 - Double the click value
upgrade3Button.addEventListener('click', () => {
    if (money >= upgrade3Cost) {
        money -= upgrade3Cost;
        clickValue *= 2;
        upgrade3Cost = Math.min(upgrade3Cost * 10, 100000); // Increase cost for next upgrade
        updateMoneyDisplay();
        document.getElementById('upgrade3-cost').innerText = upgrade3Cost;
    }
});

// Cheat Button - Infinite money
cheatButton.addEventListener('click', () => {
    if (cheatInput.value.toLowerCase() === "robbie") {
        cheatActive = true;
        money = Infinity; // Set to infinite money
        updateMoneyDisplay();
        alert("Cheat activated! You now have infinite money.");
    } else {
        alert("Incorrect cheat code.");
    }
});
