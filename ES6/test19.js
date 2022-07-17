// Use getters and setters to Control Access to an Object

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

// In other words, you are abstracting implementation details from the user.



// Passed:Thermostat should be a class with a defined constructor method.
// Passed:class keyword should be used.
// Passed:Thermostat should be able to be instantiated.
// Passed:When instantiated with a Fahrenheit value, Thermostat should set the correct temperature.
// Passed:A getter should be defined.
// Passed:A setter should be defined.
// Passed:Calling the setter with a Celsius value should set the temperature.

// this is code
// Only change code below this line

// Only change code above this line
/*
 const thermos = new Thermostat(76); // Setting in Fahrenheit scale
 let temp = thermos.temperature; // 24.44 in Celsius
 thermos.temperature = 26;
 temp = thermos.temperature; // 26 in Celsius
*/

// this is code ans.
// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius