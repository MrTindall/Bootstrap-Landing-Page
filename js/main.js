document.addEventListener("DOMContentLoaded", () => {
    const percent = document.getElementById("percent");
    const cost = document.getElementById("cost");
    const salary = document.getElementById("salary")

    countUpTo(96, percent, 1, 25);
    countUpTo(149, cost, 1, 20);
    countUpTo(51960, salary, 60, 1)

})

function countUpTo(upto, elementId, countAmount, time) {
    let current = parseInt(elementId.innerHTML, 10) || 0;

    const interval = setInterval(() => {
        if (current < upto) {
            current += countAmount;
            elementId.innerHTML = current;
        } else {
            clearInterval(interval);
        }
    }, time);
}