// //                                          // Alerts
// // // task no 1
alert("hello dear user");
// // // task no 2
alert("Error! Please enter a valid Password");
// // // task no 3
alert("Welcome to JS Land... \n Happy Coding!");
// // // task no 4
alert("welcome to js land...");
alert("Happy Coding!");
// // // task no 5
console.log("Hello.. I can run js through web browser's console")
// // // task 6 
// // //done by applying in this project
// //task 7 a,b,d done //task 7 c at line 63
//                                             //variables for strings
// all tasks done 
var username;
var myName = "Muhammad Muaz";
var message;
message = "Hello World";
alert(message);
var studentName="jhone doe";
var studentAge = "15 years old";
var job = "Certified Mobile Application developvent";
alert(studentName);
alert(studentAge);
alert(job);
alert("PIZZA\nPIZZ\nPIZ\nPI\nP"); 
var email = "example@gmail.com";
alert("my email address is " + email);   
var book = "A smarter \nway to learn JavaScript";
alert("I am trying to learn from the book" + book);
document.write("Yah! I can write HTMl through jS");
var iconString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(iconString);
                                                // variables for numbers
// all tasks done
var age = 15;
alert("I am " + age + " years old");
var numberOfVisits = 14;
alert("you have visited this site " + numberOfVisits + " times");
var birthYear = 1999;
document.write("My birth year is " + birthYear+ "<br> Data type of my declared variable is number");
var visitorName = "Jhon Doe";
var product = "T-Shirt";
var quantity = 5;
document.write("<br>" + visitorName + " ordered " + quantity + product + " on XYZ clothing store.");
                                                // VARIABLE NAMES: Legal & Illegal
// task 1
var name, age, last;
// task 2
var name, age, last, job, color;
// var 09name, @name, class, var, %color;
// task 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, underscore, $ sign <br> For example $my_1stVariable <br>");
document.write("Variables must begin with a letter, underscore or $ sign");
document.write("variable names are case sensitive <br>");
document.write("Variable names should not be JS keywords<br>");
                                                // math expressions
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>");
var d = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + d + "<br>");
var e = a * b;
document.write("Multiplication of " + a + " and " + b + " is " + e + "<br>");
var f = a / b;
document.write("Division of " + a + " and " + b + " is " + f + "<br>");
var g = a % b;
document.write("Modulus of " + a + " and " + b + " is " + g + "<br>");
// task 3
var mu;
document.write("Value after variable declaration is: "+ mu + "<br>");
mu = 15;
document.write("Initial value is: " + mu + "<br>");
mu++;
document.write("Value after increment is: " + mu + "<br>");
mu += 7;
document.write("Value after addition of 7 is: " + mu + "<br>");
mu--;
document.write("Value after decrement is: " + mu + "<br>");
mu %= 3;
document.write("Remainder is: " + mu + "<br>");
var tickectCost = 600;
var totalCost = 600*5;
document.write("Total cost of buying 5 movie tickets is: " + totalCost + "PKR" + "<br>");
// // task 5
for(i=1; i <= 10; i++){
    var t = 5;
    document.write(t + " * " + i + " = " + t * i + "<br>");
}
// // task 6
tempInC = 25;
document.write(tempInC + "C is " + (tempInC * 9/5 + 32) + "F<br>");
tempInF = 70;
document.write(tempInF + "F is " + (tempInF - 32) * 5/9  + "C<br>");
var item1=650;
var item2=100;
var order1=3;
var order2=7;
var ship=100;
var Tootal= item1*order1 + item2*order2 + ship;
document.write("Price of item 1 is: " + item1 + "<br>" );
document.write("Quantity of item 1 is: " + order1 + "<br>");
document.write("Price of item 2 is: " + item2  + "<br>");
document.write("Quantity of item 2 is: " + order2 + "<br>");
document.write("Shipping Charges: " + ship + "<br>");
document.write("Total cost is: " + Tootal + "<br>");
var totalMarks= 980;
var obMarks = 804;
document.write("Total marks is: " + totalMarks + "<br>" + "Marks obtained: " + obMarks + "<br>" + "Percentage is: " + 804/980 * 100 + "% <br>");
var favSnak= "choclate chip";
var curAge= 20;
var maxAge= 60;
var amount= 5;
var totalSnaks = (maxAge-curAge)*365*amount ;
document.write("Favourite snaks: " + favSnak + "<br>");
document.write("Curent age: " + curAge + "<br>");
document.write("Estimated max age: " + maxAge + "<br>");
document.write("Amount of snaks per dey: " + amount + "<br>");
document.write("You will need " + totalSnaks + " "+ favSnak + " to last you untill the ripe old age of " + maxAge + "<br>");
                                                // Ch 6-9
var A =10;
document.write("Result: <br> The value of a is: " + A  + "<br>");
document.write("....................................." + "<br>");
document.write("the value of ++a is: " + ++A + "<br>");
document.write("now the vale of a is: " + A  + "<br>");
document.write("the value of a++ is: " + A++ + "<br>");
document.write("now the vale of a is: " + A  + "<br>");
document.write("the value of --a is: " + --A + "<br>");
document.write("now the vale of a is: " + A  + "<br>");
document.write("the value of a-- is: " + A-- + "<br>");
document.write("now the vale of a is: " + A  + "<br>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a: " + a + "<br>" +"b: "+ b  + "<br>" + "result:" + result  + "<br>");
--a;
document.write("a: " + a + "<br>" +"b: "+ b  + "<br>" + "result:" + result  + "<br>");
--a - --b;
document.write("a: " + a + "<br>" +"b: "+ b  + "<br>" + "result:" + result  + "<br>");
--a - --b + ++b;
document.write("a: " + a + "<br>" +"b: "+ b  + "<br>" + "result:" + result  + "<br>");
--a - --b + ++b + b--;
document.write("a: " + a + "<br>" +"b: "+ b  + "<br>" + "result:" + result  + "<br>");
var userName = prompt("Enter your name", "Muaz");
alert("Hello " + userName);
var t = parseInt(prompt("Enter a number for table:", "5"));
for(i=1; i <= 10; i++){
    document.write(t + " * " + i + " = " + t * i + "<br>");
}

// task 6
var sub1 = prompt("Enter 1st subject: ");
var sub2 = prompt("Enter 2nd subject: ");
var sub3 = prompt("Enter 3rd subject: ");
var totalmarks=100;
var obMarks1 = parseInt(prompt("Enter obtained marks for 1st subject: "));
var obMarks2 = parseInt(prompt("Enter obtained marks for 2nd subject: "));
var obMarks3 = parseInt(prompt("Enter obtained marks for 3rd subject: "));
var per1 = obMarks1/totalmarks * 100;
var per2 = obMarks2/totalmarks * 100;
var per3 = obMarks3/totalmarks * 100;
var omarks = totalmarks * 3;
var oobmarks = obMarks1+obMarks2+obMarks3;
var totalper = oobmarks/omarks *100;
document.write("<b>Subject</b> <b>Total Marks</b> <b>Obtained Marks</b> <b>Percentage</b> <br>");
document.write(sub1 + " " +totalmarks  + " " + obMarks1+ " " +per1 +  "% <br>");
document.write(sub2 + " " +totalmarks  + " " + obMarks2+ " " +per2 +  "% <br>");
document.write(sub3 + " " +totalmarks  + " " + obMarks3+ " " +per3 +  "% <br>");
document.write( omarks +  " " + oobmarks + " " +totalper +  "% <br>");