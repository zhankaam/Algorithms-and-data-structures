const array = [0,-3,-56, 1, 2,99,76, 3, 4, 5,72, 6, 67, 7, -14, 8, 9, 10];

let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
      for (let j = i+1; j < array.length; j++) {
          if (array[j] < array[indexMin]) {
              indexMin = j
          }
        count += 1;
      }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(array));
console.log('count = ', count);
