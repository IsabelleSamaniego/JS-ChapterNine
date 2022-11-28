"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author:     ISabelle Samaniego
      Date:       November 27, 2022

      Filename: project09-01b.js
*/

// Apply the slice() method to the location.search
// object, storing the text after the first character in the query variable
let query = location.search.slice(1,location.search.length);

// Use the replace() method to replace very occurrence of the + character in 
// the query variable with a blank space. Apply the decodeURIComponent() method 
// to replace every URI-encoded character in query with the matching character.
query = decodeURIComponent(query);
query = query.replaceAll("+"," ");

// Appy the split() method to the query string to split the text at every 
// occurrence of the & character, placing each name=value pair as a 
// separate item in the cardFields array
let cardFields = query.split("&");


/* 7. Create a for of loop that loops through every item in the cardFields array. 
    
    At each iteration of the loop do the following:
    a. Split each item at the location of the = character, store 
        the substrings in the nameValue array variable.
    b. Store the first item in the nameValue array in the name variable. 
        Store the second item in the nameValue array in the value variable.
    c. Store the value of the value variable as the text content of the 
        document element with an id equal to the name variable.
*/
for (let x in cardFields) {
    // a.
    let nameValue = cardFields[x].split("=");
    // b.
    let name = nameValue[0];
    // c.
    let value = nameValue[1];

    document.getElementById(name).textContent=value;

}