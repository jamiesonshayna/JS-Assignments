/*
@author: Shayna Jamieson
@version: 1.0
Date: February 05, 2020
File Name: json-search.js
Description: This file contains code that allows a user to input a name that they are
searching for in our 'data'. When they submit the information they are taken here
where we can loop through our predefined JSON formatted object to see if any of the entries
having matching names. If they do we will display that object's information for the user,
otherwise we will display a no results found message.
 */

    // create people OBJECT
    let people = [
        {name: "Shayna Jamieson", sex: "F", born: "1994", died: "n/a",
            father:{first: "Rik", last: "Jamieson"}, mother:{first: "Alisa", last: "Cissell"}},
        {name: "Alisa Cissell", sex: "F", born: "1965", died: "n/a",
            father:{first: "Al", last: "Jeffers"}, mother:{first: "Fumiko", last: ""}},
        {name: "Rik Jamieson", sex: "M", born: "1953", died: "n/a",
            father:{first: "", last: ""}, mother:{first: "May", last: "Jamieson"}},
        {name: "Claudia Maine", sex: "F", born: "1966", died: "n/a",
            father:{first: "Al", last: "Jeffers"}, mother: "Fumiko"},
        {name: "Lyle Phillips", sex: "M", born: "unknown", died: "2016",
            father:{first: "", last: ""}, mother:{first: "", last: ""}},
        {name: "Jane Doe", sex: "F", born: "1876", died: "1956", // FIRST AND LAST
            father:{first: "Petrus" , last: "de Milliano"}, mother:{first: "Sophia", last: "van Damme"}},
        {name: "Jane Ramirez", sex: "F", born: "1930", died: "1978", // FIRST AND LAST
            father:{first: "Father", last: "Ramirez"}, mother:{first: "Mother", last: "Ramirez"}}
    ];

    // when the search button is clicked we call findMatch()
    document.getElementById("search-btn").onclick = findMatch;

    /**
     * This function displays user input name search matches from a JSON object.
     *
     * This method will loop through our JSON object checking if any of the name values are
     * the same as the user's input value. If so we will display the full object entry for the
     * user to see, otherwise we will send a no results found message back in the HTML.
     */
    function findMatch() {
            // take search input and make all lower case (so that we can check case-insensitively)
            // also split the word up into space separated bits to check for partial searches
            let searchName = document.getElementById("search").value.toString().toUpperCase().trim();

            // build our output of people that match the search
            let result = "";

            // loop through our JSON object to see if we have name matches from our search
            for(let i = 0; i < people.length; i++) {
                if(people[i].name.toString().toUpperCase().includes(searchName)) {
                    result += "Name: " + people[i].name + "<br>" +
                        "Sex: " + people[i].sex + "<br>" +
                        "Born: " + people[i].born + "<br>" +
                        "Died: " + people[i].died + "<br>" +
                        "Father: " + people[i].father.first + " " + people[i].father.last + "<br>" +
                        "Mother: " + people[i].mother.first + " " + people[i].mother.last + "<br><br>";
                }
            }
            // display result in the HTML
            if(result === "") {
                document.getElementById("result").innerHTML = "No match found.";
            } else {
                document.getElementById("result").innerHTML = result;
            }
        }