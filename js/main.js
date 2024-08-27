// Messed up and accientally did the home page to start
// this was set up to scroll the numbers up to there values like on the home page
// was proud of it so I left it, may come in handy later
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