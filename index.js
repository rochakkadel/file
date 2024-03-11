

function calculateStats() {
   let count = 0; 
   const numbersInput = document.getElementById("numbers").value;
   const numbersArray = numbersInput.split(" ").map(Number);

   count += numbersArray.length; // Increment count by the length of the new data

   const sum = numbersArray.reduce((total, num) => total + num, 0);
   const average = sum / numbersArray.length;

   const sortedArray = numbersArray.slice().sort((a, b) => a - b);
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
   document.getElementById("count").textContent = `Count: ${count}`; // Display count in HTML
}

function refresh() {
   count = 0; // Reset count to 0
   document.getElementById("average").textContent = ""; // Clear average
   document.getElementById("largest").textContent = ""; // Clear largest
   document.getElementById("smallest").textContent = ""; // Clear smallest
   document.getElementById("count").textContent = ""; // Clear count
   document.getElementById("median").textContent = ""; // Clear median
   document.getElementById("rateOfChange").textContent = ""; // Clear rate of change
   document.getElementById("numbers").value = ""; // Clear input field
}
