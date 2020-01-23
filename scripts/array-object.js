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
  var dict = {};

  for(var i = 0; i < array.length; i++) {
      var tempType = typeof array[i];
      var tempName = tempType.toString()+"s";

      if(dict.hasOwnProperty(tempName)) {
          dict[tempName].push(array[i]);
      } else {
          dict[tempName] = [];
          dict[tempName].push(array[i]);
      }
  }

    // make object that has left side of keys and right side of their arrays
    //document.getElementById("output2").innerHTML = "var result = " + JSON.stringify(dict);
    return "var result = " + JSON.stringify(dict);
}

let arr = [-1, 5, "cat", false, 10.2, true, "dog"];
document.getElementById("output").innerHTML = toObject(arr);