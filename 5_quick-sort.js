const array = [0,-3,-56, 1, 2,99,76, 3, 4, 5,72, 6, 67, 7, -14, 8, 9, 10];

let count = 0;

function quickSort(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j + 1] < array[j]) {
            let tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
          }
        count += 1;
      }
  }
  return array;
}

console.log('length', array.length);
console.log(quickSort(array)); // O(n*n)
console.log('count = ', count);
