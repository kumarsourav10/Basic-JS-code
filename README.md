<!-- Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

Waiting:multiplyAll([[1], [2], [3]]) should return 6
Waiting:multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
Waiting:multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54 -->


function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// consol)