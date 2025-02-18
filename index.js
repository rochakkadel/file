 const h1 = document.getElementById("h1");


document.addEventListener("keydown", event =>{
   h1.style.color = "gold";
})


document.addEventListener("keyup", event =>{
   h1.style.color = "white";
})



function calculateStats() {
    let count = 0; 
    const numbersInput = document.getElementById("numbers").value;
    const numbersArray = numbersInput.split(" ").map(Number);
 
    count += numbersArray.length; 
 
    const sum = numbersArray.reduce((total, num) => total + num, 0);
    const average = sum / numbersArray.length;

    sortedArray.shift();  
    sortedArray.pop();
 
    const sortedArray = numbersArray.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArray.length / 2);
    const median = sortedArray.length % 2 === 0 ? 
                   (sortedArray[middle - 1] + sortedArray[middle]) / 2 :
                   sortedArray[middle];
 
    const smallest = Math.min(...numbersArray);
    const largest = Math.max(...numbersArray);
 
    document.getElementById("average").textContent = Average: ${average.toFixed(2)};
    document.getElementById("median").textContent = Median: ${median};
    document.getElementById("smallest").textContent = Smallest: ${smallest};
    document.getElementById("largest").textContent = Largest: ${largest};
    document.getElementById("count").textContent = Count: ${count}; 
 }
 
 function refresh() {
    count = 0; // Reset count to 0
    document.getElementById("average").textContent = ""; 
    document.getElementById("largest").textContent = ""; 
    document.getElementById("smallest").textContent = ""; 
    document.getElementById("count").textContent = ""; 
    document.getElementById("median").textContent = ""; 
    document.getElementById("rateOfChange").textContent = ""; 
    document.getElementById("numbers").value = ""; 
 }
 
