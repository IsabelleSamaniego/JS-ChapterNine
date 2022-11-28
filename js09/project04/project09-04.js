"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Isabelle Samaniego
      Date:   November 25, 2022

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {

      // test whether the document.cookie object exists
      if (document.cookie) {
            let bestText = document.getBestTime("best");
            bestText.innerText = "best seconds";
      } 

      // create bestTime function
      function getBestTime() {
            if (document.cookie) {
                 let cookieArray = document.cookie.split("=");
                 cookieArray.parseInt(cookieArray[1]);
            } else {
                  return "9999";
            }
      }
      
      // create updateRecord function
      function updateRecord() {
            const solutionTime = document.getElementsByClassName("timer");
            solutionTime.parseInt();

            const bestTime = getBestTime();

            if (solutionTime < bestTime) {
                  let bestTime = solutionTime;  
                  bestText.innerText = bestTime + " seconds";
            }
            
      }

      document.cookie = "max-age=90; puzzle8Best=" + bestTime;
});

