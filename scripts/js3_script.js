/*
@author: Shayna Jamieson
@version: 1.0
Date: January 17, 2020
File Name: js3_script.js
Description: This file contains the function heeHaw that takes a number as input,
and prints from 1 to that number in the console using applying the same rules as the
Chapter 2 JS exercise. Error messages are provided if the user enters an invalid parameter.
Challenge: write a recursive function
 */

/* This function is called and validates user input. If user input is valid we call the
recursive function to console log our response. If user input is invalid we log out an
error message.
 */
function heeHaw(num) {
    if(isNaN(num) || num < 1) {
        console.log("Invalid User Input");
    } else {
        heeHawRecursive(1, num);
    }
}

// recursive helper function
function heeHawRecursive(startingNum, endPoint) {
    if(startingNum <= endPoint) {
        if(startingNum % 3 === 0 && startingNum % 5 !== 0) {
            console.log("Hee!");
        } else if(startingNum % 3 !== 0 && startingNum % 5 === 0) {
            console.log("Haw!");
        } else if(startingNum % 3 === 0 && startingNum % 5 === 0) {
            console.log("Hee Haw!");
        } else {
            console.log(startingNum);
        }
        return heeHawRecursive(++startingNum, endPoint);
    } return;
}

// test input
console.log("Test Input: 10");
heeHaw(10);
console.log("-----------------------------");
console.log("Test Input: 100");
heeHaw(100);
console.log("-----------------------------");
console.log("Test Input: hello");
heeHaw("hello");
console.log("-----------------------------");
console.log("Test Input: -1");
heeHaw(-1);
console.log("-----------------------------");
console.log("Test Input: 1");
heeHaw(1);
console.log("-----------------------------");




