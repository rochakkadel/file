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

    if (numbersArray.length === 0) {
        alert("Invalid input. Enter valid numbers.");
        return;
    }

    count = numbersArray.length;

    const sum = numbersArray.reduce((total, num) => total + num, 0);
    const average = sum / count;

    const sortedArray = [...numbersArray].sort((a, b) => a - b);
    const middle = Math.floor(sortedArray.length / 2);
    const median = sortedArray.length % 2 === 0 ?
        (sortedArray[middle - 1] + sortedArray[middle]) / 2 :
        sortedArray[middle];

    const smallest = Math.min(...numbersArray);
    const largest = Math.max(...numbersArray);

    document.getElementById("average").textContent = `Average: ${average.toFixed(2)}`;
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
