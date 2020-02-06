"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Ariahnnah Porras
   Date:   2/03/19
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;


var cartHTML = "<table> \
         <tr> \
         <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> \
         </tr>";

//makes "for" loop for all the values in the array
for(var i= 0; i<item.length; i++){
   //adds more HTML code to the Cart HTML varialbe 
   cartHTML += "<tr> \
         <td><img src='tc_" + item[i] + ".png' alt='item' /></td> \
         <td>" + itemDescription[i] + "</td> \
         <td>$" +itemPrice[i] + "</td> \
         <td>" + itemQty[i] + "</td>";
   //multiples the item cost and item qt to get the total and stores it in the Order Total Variable
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   //stores item cost in order total
   orderTotal += itemCost;
}
//adds moreHTML code to cartHTML varaible adds the order total to the code and finishes the table
cartHTML+= "<tr> \
         <td colspan='4'>Subtotal</td> \
         <td>$" + orderTotal + "</td> \
         </tr> \
         </table>";

//inserts everything inside the cartHTML into HTML
document.getElementById("cart").innerHTML = cartHTML; 

