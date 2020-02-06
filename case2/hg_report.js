"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Ariahnnah Porras
   Date:   2/05/20
   
   Filename: hg_report.js
	
*/
var gameReport = "<h1>" + itemTitle + "</h1 \
             <h2>By:" + itemManufacturer + "</h2 \
             <img src='hg_" + itemID + ".png' alt='id' id='gameImg' /> \
             <table> \
             <tr><th>Product Id</th><td>"+itemID+"</td></tr> \
             <tr><th>List Price</th><td>"+itemPrice+"</td></tr> \
             <tr><th>Platform</th><td>"+itemPlatform +"</td></tr> \
             <tr><th>ESRB Rating</th><td>"+itemESRB+"</td></tr> \
             <tr><th>Condition</th><td>"+itemCondition+"</td></tr> \
             <tr><th>Release</th><td>"+itemRelease+"</td></tr> \
             </table> \
             "+itemSummary;
//makes the variable Rating Sum = 0
 var ratingsSum = 0;
//Makes the variable ratingsCount = the length of the array ratings
 var ratingsCount = ratings.length;
 //makes it so it goes through the loop and adds the value in the ratings and adds it to the ratingsSUm
 for(var i = 0; i<ratings.length; i++){
    ratings[i] += ratingsSum;
 }

 var ratingsAvg = ratingsSum/ratingsCount;
 var ratingReport = "<h1>Customer Reviews</h1> \
                <h2>"+ratingsAvg+"out of 5 stars ("+ratingsCount+" reviews)</h2>";

 for(var i = 0; ratings[0,1,2]; i++){
    ratingReport+= "<div class='review'> \
                <h1>"+ratingTitles+"</h1> \
                <table> 
                <tr><th>By</th><td>"+ratingAuthors+"</td></tr> \
                <tr><th>Review Date</th><td>"+ratingDates+"</td></tr> \
                <tr><th>Rating</th>/tr>";
                for(var i = 0; ratings[i]; i++){
                   ratingReport += "<img src='hg_star.png'/>";
                }
    ratingReport+="</td></tr></table>\
       "+ratingSummaries

 }
 document.getElementsByTagName("aside").innerHTML = ratingReport;
 document.getElementsByTagName("article").innerHTML = gameReport;

