/*
@author: Shayna Jamieson
@version: 1.0
Date: January 22, 2020
File Name: array-object.js
Description: This file contains a function that accepts an array as a parameter.
The function returns an object. The function converts the array to an object with
properties containing the array values, grouped by type.
 */

function toObject(array) {
  let obj = {};

  // loop through our input to add keys and values to our object
  for(let i = 0; i < array.length; i++) {
      // get the current 'key' for our array[i] based on the value's type
      let tempName = (typeof array[i]).toString() + "s";

      // if the key exists, we add our next value to the array with the correct key
      if(obj.hasOwnProperty(tempName)) {
          obj[tempName].push(array[i]);
      } else { // if the key doesn't exist we add it to our object with the first array value at array[i]
          obj[tempName] = [];
          obj[tempName].push(array[i]);
      }
  }

    return "var result = " + JSON.stringify(obj, null, 3); // return our desired HTML output String
}

let arr = [-1, 5, "cat", false, 10.2, true, "dog"];
document.getElementById("output").innerHTML = toObject(arr); // send back to HTML with function call