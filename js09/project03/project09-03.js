"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: 
      Date:   

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

// if the sbloggerVisit is already set
if(localStorage.sbloggerVisit) {
      // get the value
      const storedLastDate = localStorage.sbloggerVisit;
    
      // set the date in last visit date
      lastVisitDate.innerHTML = storedLastDate;
    
      const lastDate = storedLastDate;
    
      // iterate over the articleDates array
      for(let i=0;i<articleDates.length;i++) {
        // get the articleDate
        let articleDate = articleDates[i].innerHTML;
    
        // if the articleDate is greater than the lastDate
        if(articleDate > lastDate)
        {
          // set new in the innerHTML
          articleDates[i].innerHTML = articleDates[i].innerHTML + "<strong>new</strong>";
        }
      }
    } else {
        // if the user visits the site for the first time
        lastVisitDate.innerHTML = "Welcome to SBlogger!";
    
        // iterate over the articleDates array
        for(let i=0;i<articleDates.length;i++) {
            // set new in the innerHTML
            articleDates[i].innerHTML = articleDates[i].innerHTML + "<strong>new</strong>";
        }
    }
    
    // set current date in the sbloggerVisit value
    let currentDate = new Date("9/12/2024");
    localStorage.sbloggerVisit = currentDate.toLocaleDateString();

