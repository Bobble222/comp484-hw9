//Part 1
var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();

if (month < 10) {
   month = "0" + month; 
}
if (day < 10) {
    day = "0" + day;
}
document.getElementById("part1").innerHTML = "<h2> Today is " + month + "/" + day + "/" + year + "</h2>";





//Part 2
var convertableString1 = "123";
var convertableString2 = "-2";
var inconvertableString = "@fish";
var double = "12.34";
var temp; //an intermediary variable used in mulriple parts

document.getElementById("part2").innerHTML = "<h2>Number Conversion Tests</h2>";
document.getElementById("part2").innerHTML += "Original variable #1: " + convertableString1;
temp = Number(convertableString1); //attempts to convert the variable to a number while preserving the original
document.getElementById("part2").innerHTML += "<br>Converted: "    + temp;
//if-else section checks if the converted variable is an integer, a number, or neither.
if (Number.isInteger(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is an integer."; 
}
else if (!Number.isNaN(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is a number, but not an integer."; 
}
else { //worst case, use original variable.
    document.getElementById("part2").innerHTML += "<br>" + convertableString1 + " is neither a number nor integer.";
}


document.getElementById("part2").innerHTML += "<br><br>Original variable #2: " + convertableString2;
temp = Number(convertableString2); //attempts to convert the variable to a number while preserving the original
document.getElementById("part2").innerHTML += "<br>Converted: "    + temp;
//if-else section checks if the converted variable is an integer, a number, or neither.
if (Number.isInteger(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is an integer."; 
}
else if (!Number.isNaN(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is a number, but not an integer."; 
}
else { //worst case, use original variable.
    document.getElementById("part2").innerHTML += "<br>" + convertableString2 + " is neither a number nor integer.";
}

document.getElementById("part2").innerHTML += "<br><br>Original variable #3: " + inconvertableString;
temp = Number(inconvertableString); //attempts to convert the variable to a number while preserving the original
document.getElementById("part2").innerHTML += "<br>Converted: "    + temp;
//if-else section checks if the converted variable is an integer, a number, or neither.
if (Number.isInteger(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is an integer."; 
}
else if (!Number.isNaN(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is a number, but not an integer."; 
}
else { //worst case, use original variable.
    document.getElementById("part2").innerHTML += "<br>" + inconvertableString + " is neither a number nor integer.";
}

document.getElementById("part2").innerHTML += "<br><br>Original variable #4: " + double;
temp = Number(double); //attempts to convert the variable to a number while preserving the original
document.getElementById("part2").innerHTML += "<br>Converted: "    + temp;
//if-else section checks if the converted variable is an integer, a number, or neither.
if (Number.isInteger(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is an integer."; 
}
else if (!Number.isNaN(temp)) {
    document.getElementById("part2").innerHTML += "<br>" + temp + " is a number, but not an integer."; 
}
else { //worst case, use original variable.
    document.getElementById("part2").innerHTML += "<br>" + double + " is neither a number nor integer.";
}




//part 3
var item1Price = 2000;
var item2Price = 100;
var taxRate = 1.5625/100;
var bulkDiscount = -20;


document.getElementById("part3").innerHTML =  "<h2>Math and Number Formatting</h2>";
document.getElementById("part3").innerHTML += "<h3>Comp484 Shopping System</h3>";
document.getElementById("part3").innerHTML += "Item 1 Price: $"          + item1Price + "<br>";
document.getElementById("part3").innerHTML += "Item 2 Price: $"          + item2Price + "<br>";
document.getElementById("part3").innerHTML += "Tax rate: "               + taxRate + "%<br>";
document.getElementById("part3").innerHTML += "bulk shipping discount: " + bulkDiscount + "%<br><br>";
document.getElementById("part3").innerHTML += "Customer orders 2 item 1s, and 5 item 2s.<br>";
//calculate customer's order total.
item1Price *= 2;
item2Price *= 5;
temp = item1Price + item2Price;
temp = temp.toLocaleString();
document.getElementById("part3").innerHTML += "Their subtotal is equal to $" + temp + ".<br>";
//apply tax
document.getElementById("part3").innerHTML += "Taxes come out to an additional $" + Number.parseInt(temp.replace(/,/,'')*taxRate) + " and change. <br>";
temp = Number.parseFloat(temp.replace(/,/,'')*taxRate);
//get grand total
document.getElementById("part3").innerHTML += "Total cost comes out to $" + (item1Price + item2Price + temp).toFixed(2);