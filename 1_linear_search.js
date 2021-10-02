const array = [1, 78, 95, 12, 60, 72, 98, 76, 99];

let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 12));
console.log('count = ', count);
