const h1 = document.getElementById("h1");

document.addEventListener("keydown", () => {
    h1.style.color = "gold";
});

document.addEventListener("keyup", () => {
    h1.style.color = "white";
});

let count = 0; // Global count variable

function calculateStats() {
    const numbersInput = document.getElementById("numbers").value.trim();
    if (!numbersInput) {
        alert("Please enter numbers.");
        return;
    }

    const numbersArray = numbersInput.split(/\s+/).map(Number).filter(n => !isNaN(n));

    if (numbersArray.length < 3) {
        alert("Enter at least 3 numbers.");
        return;
    }

    count = numbersArray.length;

    const sortedArray = [...numbersArray].sort((a, b) => a - b);
    const middleNumbers = sortedArray.slice(1, -1); 

    const sum = middleNumbers.reduce((total, num) => total + num, 0);
    const adjustedAverage = sum / middleNumbers.length;

    const middle = Math.floor(middleNumbers.length / 2);
    const median = middleNumbers.length % 2 === 0 ?
        (middleNumbers[middle - 1] + middleNumbers[middle]) / 2 :
        middleNumbers[middle];

    const smallest = Math.min(...numbersArray);
    const largest = Math.max(...numbersArray);

    document.getElementById("average").textContent = `Adjusted Avg: ${adjustedAverage.toFixed(2)}`;
    document.getElementById("median").textContent = `Median: ${median}`;
    document.getElementById("smallest").textContent = `Smallest: ${smallest}`;
    document.getElementById("largest").textContent = `Largest: ${largest}`;
    document.getElementById("count").textContent = `Count: ${count}`;
}

function refresh() {
    count = 0;
    document.getElementById("average").textContent = "";
    document.getElementById("largest").textContent = "";
    document.getElementById("smallest").textContent = "";
    document.getElementById("count").textContent = "";
    document.getElementById("median").textContent = "";
    document.getElementById("numbers").value = "";
}
