document.addEventListener("DOMContentLoaded", () => {
    const percent = document.getElementById("percent");
    const cost = document.getElementById("cost");
    const salary = document.getElementById("salary")


    countToo(96, percent, 1, 25);
    countToo(149, cost, 1, 20);
    countToo(51960, salary, 100, 1)


    function countToo(upto, elementId, countAmount, time) {
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
})