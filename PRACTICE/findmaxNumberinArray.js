//Find max number in an array
let array = [100, 0, 50, 23, 275, 345, 1000];
let max = array[4];
function dis() {
  for (i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
dis();
console.log(max);

//console.log(Math.max(...array) )                  //1000
