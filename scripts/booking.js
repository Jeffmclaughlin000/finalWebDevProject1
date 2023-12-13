
let dailyRate = 35; 
let dayCounter = 0; 

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');


dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', () => {
        if (!dayButton.classList.contains('clicked')) {
            dayCounter++;
            dayButton.classList.add('clicked');
        } else {
            dayCounter--;
            dayButton.classList.remove('clicked');
        }
        calculateCost();
    });
});


clearButton.addEventListener('click', () => {
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateCost();
});


halfDayButton.addEventListener('click', () => {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
});

fullDayButton.addEventListener('click', () => {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
});


function calculateCost() {
    const totalCost = dayCounter * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}