const array = [0, -3, -56, 1, 2, 99, 76, 3, 4, 5, 72, 6, 67, 7, -14, 8, 9, 10];

let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
      return array;
}
let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex)
        continue;
    if (array[i] < pivot) {
        less.push(array[i]);
    } else {
        greater.push(array[i]);
    }
}
return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array));
console.log("count = ", count);
