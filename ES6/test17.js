
// Write Concise Declarative Functions with ES6

// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// Waiting:Traditional function expression should not be used.
// Waiting:setGear should be a declarative function.
// Waiting:bicycle.setGear(48) should change the gear value to 48.


// Only change code below this line
/*
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
// this is the code 

*/

// this is the code ans.
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear (newGear) {
      "use strict"
      this.gear = newGear; 
     }
  };
  
  // Only change code above this line
  bicycle.setGear(48);
  console.log(bicycle.gear);
  
  