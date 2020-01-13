/*
@author: Shayna Jamieson
@version: 1.0
Date: January 13, 2020
File Name: js2_script.js
Description: This is a console program for assignment JS2.
 */

// loop through from numbers 1 to 100 (inclusive)
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
       console.log("Hee!")
    } else if(i % 3 !== 0 && i % 5 === 0) {
        console.log("Haw!")
    } else if(i % 3 === 0 && i % 5 === 0) {
        console.log("Hee Haw!");
    } else {
        console.log(i);
    }
}

