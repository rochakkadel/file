function calculateStats() {
   const numbersInput = document.getElementById("numbers").value;
   const numbersArray = numbersInput.split(" ").map(Number);

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
}
