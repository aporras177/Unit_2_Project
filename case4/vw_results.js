"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/





/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}
var reportHTML = "<h1>"+raceTitle+"</h1>";

 //makes a for loop that goes through the entire race array
 for(var i = 0; i<race.length; i++){

    var totalVotes = 0;


    votes[i].forEach(calcSum);  /* *** */

    //adds a table to reportHTml that adds html code that makes new eows with each itrict on it
    reportHTML += "<table> \
                <caption>"+race[i]+"</caption> \
                <tr><th>Candidate</th><th>Votes</th></tr>";
 //adds the function candidate rows with the parameters i and totalvotes inserting all the info about each candidate(party, votes, and percent)
    reportHTML += candidateRows(i, totalVotes); /* *** */

    //closes the table
    reportHTML += "</table>";
 }
 //inserts the reportHTML into the HTML
 document.getElementsByTagName("section")[0].innerHTML = reportHTML;

 //makes a function to make a row for each candidate
 function candidateRows(raceNum, totalVotes){
    //makes rowHTMl and empty string 
    var rowHTML = "";

    for(var j = 0; j<=2; j++){
       var candidateName = candidate[raceNum][j];
       var candidateParty = party[raceNum][j];
       var candidateVotes = votes[raceNum][j];
       var candidatePercent = calcPercent(candidateVotes, totalVotes);

       rowHTML += "<tr> \
                <td>"+candidateName+"("+candidateParty+")</td> \
                <td>"+ candidateVotes.toLocaleString() +"("+candidatePercent.toFixed(1)+")</td>" ;
                for(var k = 0; k<candidatePercent; k++){
                   rowHTML += createBar(candidateParty);
                }
             rowHTML+="</tr>";
    }
    return rowHTML;
 }
 function calcSum(value) {
    totalVotes += value;
 }
 function calcPercent(value, sum) {
    return (100*value/sum);
 }
 function createBar(partyType){
    var barHTML = "";
    switch(partyType){
    case 'D':
       barHTML = "<td class='dem'></td>";
       break;

    case 'R':
       barHTML = "<td class='rep'></td>"
       break;

    case 'I':
       barHTML = "<td class='ind'></td>";
       break;
    }
    return barHTML;
 } 

