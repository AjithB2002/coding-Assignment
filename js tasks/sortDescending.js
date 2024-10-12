function sortDescending(arr) {
  
    return arr.sort((a, b) => b - a);
}


let numbers = [5, 3, 8, 1, 2, 7];
let sortedNumbers = sortDescending(numbers);
console.log(sortedNumbers);  