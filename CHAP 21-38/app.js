// CHAPTER 21 - 25
// TASK 1
// var firstName = prompt("Enter first name");
// var LastName = prompt("Enter first name");
// var fullName = firstName + " " + LastName;
// document.write("Wellcome <br>" + fullName );


// TASK 2
// var mobile = prompt("Enter your favorite mobile phone model");
// var stringLength = mobile.length;
// document.write("Your favorite mobile phone model is:" + " " + mobile + "<br>")
// document.write("String Length is: " + " " + stringLength)

// TASK 3
// var string = "Pakistani";
// var n = string.indexOf("n")
// document.write("String: " + string + "<br>");
// document.write("Index of 'n' is:" + " " + n);

// TASK 4
// var string = "Hello World";
// var n = string.lastIndexOf("l")
// document.write("String: " + string + "<br>");
// document.write("Index of 'l' is:" + " " + n);

// TASK 5
// var string = "Pakistani";
// var index_3 = string.charAt(3);
// document.write("String: " + string + "<br>");
// document.write("Character at 3rd Index is:" + " " + index_3);

// TASK 6
// var city = "Hyderabad";
// var changeCity = city.replace("Hyder","Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement:" + " " + changeCity);

// TASK 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var changeMessage = message.replace("and","&");
// document.write(changeMessage);

// // TASK 9
// var value_1 = "472";
// var value_2 = parseInt(value_1);
// document.write("Value: " + value_1 + "<br>") ;
// document.write("Type: String" + "<br>");
// document.write("Value: " + value_2   + "<br>") ;
// document.write("Type: Number", typeof value_2);

// TASK 10
// var x = prompt("Enter small latters word");
// var x_1 = x.toLocaleUpperCase();
// document.write("User input: " + x + "<br>");
// document.write("Upper case: " + x_1 + "<br>");

// TASK 11
// var x = prompt("Enter some text");
// var firstChar = x.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = x.slice(1);
// otherChar = otherChar.toLowerCase()
// document.write("User input: " + x + "<br>");
// document.write("Title case: " + firstChar + otherChar);

// TASK 12
// var num = 35.36 ; 
// var num_1 = num.toString();
// document.write("Number: " + num   ,typeof num +"<br>" );
// document.write("Result: " + num_1  , typeof num_1 + "<br>" );

// // TASK 13
// var text = prompt("Enter your name");   
// for (var i = 0; i < text.length; i++) {
//     if (text.charAt(i) === String.fromCharCode(33) ||text.charAt(i) === String.fromCharCode(44) ||text.charAt(i) === String.fromCharCode(64) || text.charAt(i) === String.fromCharCode(46)) {
//         prompt("Please enter a valid user name");
         
//     }

// }

// TASK 14
// var message = prompt("Welcome to Proud Bakery: What do you want to order Sir/Maam?");
// var x = message
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// for ( i = 0; i<arr.length ; i++)
// if (arr[i] = x) {
//     document.write(x + " is <b> available </b> at index " + arr.indexOf("cake" , "apple pie", "cookie", "chips", "patties") + " " + "in our bakery");
// break;
// } 
// else {
//  document.write("We are sorry." + x + " is <b> no available </b> in our bakery");   
// }


// TASK 15

// TASK 16
// var university = "University of Karachi"
// var array = university.split("");
// for ( i = 0; i < university.length; i++)
// document.write(array[i] + "<br>");

// TASK 17 
// var name  = prompt("Enter some text");
// var lastChar = name.charAt(name.length - 1);
// document.write("User input: " + name + "<br>");
// document.write("Last character: " + lastChar);


// // TASK 18
// var string = "The quick brown fox jumps over the lazy dog"
// var NoOfOccurrences = string.count();
// document.write("Text " + string + "<br>" );
// document.write("There are " + NoOfOccurrences + " occurrences of word"    )



// CHAPTER 26 - 30

// TASK 1
// var num = 3.45214;
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br>")
// document.write("round off value: " + round + "<br>")
// document.write("floor value: " + floor + "<br>")
// document.write("ceil: " + ceil + "<br>")


// TASK 2
// var num = -2.673;
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("Number: " + num + "<br>")
// document.write("round off value: " + round + "<br>")
// document.write("floor value: " + floor + "<br>")
// document.write("ceil: " + ceil + "<br>")

// // TASK 3
// var num = -4 ;
// document.write(Math.abs(num));

// TASK 4
// var dice_1 = Math.random() *7;
// var floor_1 = Math.floor(dice_1);
// var cont_1 = floor_1.toFixed(0);
// var dice_2 = Math.random() *7;
// var floor_2 = Math.floor(dice_2);
// var cont_2 = floor_2.toFixed(0);
// document.write("random dice value: " + cont_1 + "<br>");
// document.write("random dice value: " + cont_2);

// TASK 5
// var value_1 = Math.random() * 3  ;
// var floor_1 = Math.floor(value_1);
// var value_2 = Math.random() *3;
// var floor_2 = Math.floor(value_2);

// document.write( floor_1 + "<br>" + "random coin value: Heads " + "<br>"  )
// document.write( floor_2 + "<br>" + "random coin value: Tails"  )
// // TASK 6
// var num = Math.random(num<=110) *100 ;
// var cont = num.toFixed(0);

// document.write("random number between 1 and 100: "  + cont)
// TASK 7
// var weight = prompt("Enter your weight in kilograms");
// var parse = parseInt(weight);
// document.write("The weight of user is " + parse + " Kilograms");
// TASK 8

// var secretNum = Math.random(secretNum <=10) *10;
// var fixed = secretNum.toFixed(0);
// var guessNum  = prompt("Enter a number between 1 and 10");
//    if (guessNum === fixed){
//        alert("Correct! Congratulation");
//    }
//    else{
//        alert("Try again");
//    }

// CHAPTER 31 - 34 

// task 1
// var today  = new Date();
// document.write(today);

// // TASK 2
// var months = ["Jan","Fab","March","April","May","June","July","August","September","October","November","December"]
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = months(theDay);
// document.write(nameOfMonth)

// TASK 3

// var today = new Date();
// var x = today.toString();
// var y = x.slice(0,3);
// alert("Today is " + y )

// TASK 4
// var dayNames = ["Sun","Mon","Tue","Wed","Fri","Sat"];
// var now = new Date();
// var today = now.getDay();
// var NameOfToday = dayNames(today);
// if (NameOfToday === Sun || NameOfToday === Sat){
//     alert("Its fun day")
// }

// TASK 5
// var now = new Date();
// var x = now.getDate();
// if (x <= 15){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// TASK 6
// var now = new Date();
// var x = now.getTime("January 1,1970");
// var inMin = x * 60 * 60 ;
// document.write(now + "<br>" + "Elapsed Milliseconds since January 1,1970: " + x 
// + "<br>" + "Elapsed Minutes since January 1,1970: " + inMin)

// TASK 7
// var now = new Date();
// var time = now.getHours();
// if (time < 12){
//     alert("Its " + time  + " AM")
// }
// if (time === 12){
//     alert("Its " + time  + " NOON")
// }
// else{
//     alert("Its " + time  + " PM")
// }

// TASK 8
// var d = new Date();
// d.setDate(0,31); 
// d.setMonth(11);
// d.setFullYear(2020);
// d.setHours(0)
// d.setMinutes(0);
// d.setSeconds(0);
// d.setMilliseconds(000)
// alert("Latter Date: " + d )

// TASK 9

// var ramzanStart= new Date( 2020,3,23);
// var ramzanTime=ramzanStart.getTime();
// //document.write(rm+"<br>")
// var today= new Date();
// var todayTime=today.getTime();
// //document.write(todaym+"<br>")
// var day=todayTime-ramzanTime;
// var c =Math.floor(day/(1000*60*60*24));
// document.write(c+"  days have passed since 1st Ramadan, 2020") 

// TASK 10

// var d= new Date(2015,11,5);
// d.setHours(22,50,16)
// document.write("On refrence Date : "+" "+d+"<br>");
// var e=d.getTime();
// //document.write(e+"<br>")
// var f=new Date(2015,0,0);
// var g=f.getTime();
// //document.write(g+"<br>");
// var h=e-g;
// var i=Math.floor(h/(1000*60));
// document.write(i+"seconds had passed since begining of 2015"+"<br>")   

// TASK 11

// var e=new Date();
// document.write("Current date: "+" "+e+"<br>");
// var d=new Date();
// d.setHours(18)
// document.write("1 hour ago it was "+d+"<br>")

// TASK 12

// var c=new Date();
// document.write("Current Date: "+" "+c+"<br>")
// var b= new Date(1920,5,18);
// document.write("Its "+b)   

// TASK 13

// var dob= new Date(prompt("Enter birth year"));

// var dobmili=dob.getTime();
// var j=dob.toString();
// var k=j.slice(11,15)

// //document.write(rm+"<br>")
// var today= new Date();
// var todaym=today.getTime();
// //document.write(todaym+"<br>")
// var d=todaym-dobmili;
// var c=Math.floor(d/(1000*60*60*24*30*12));
// document.write(" Your age is: "+" "+c+"<br>")
// document.write("your birth year is : "+" "+k)  

// TASK 14
// document.write("<h2>K-ELECTRIC  BILL</h2>")

// var a=prompt("Enter Your name:");
// document.write("Customer Name: "+" "+a+"<br>");

// var b=prompt("Enter current month");
// document.write("Current Month : "+" "+b+"<br>")

// var c= parseInt(prompt("Enter Units"));
//  document.write("Number of units: "+" "+c)

//  var d= 16;
//  document.write("Charges per units: "+" "+d+"<br>");

//  var e=c*d;
//  document.write("Net Amount payable (within due date)"+"<br>");

//  var f=350;
//  document.write("Late payment surchage :"+f+"<br>");

//  var g=e+f;
//  document.write("Gross amount payable(after due date)"+" "+g+"<br>")



// CHAPTER 35 - 38

// TASK 1
// function time(a){
//     var a= new Date();
//     document.write(a)
// }
// time(); 

// TASK 2
// function userName(a,b){

//     var a=prompt("Enter your first name:");
//     var b=prompt("Enter your last name")
//     alert("Welcome "+a+" "+b)
// }
// userName();


// TASK 3

// function add(z){

//     var x=+prompt("Enter your first number:");
//     var y=+prompt("Enter your second number")
//     var z= x+y;
//     alert(z)
// }
// add();

// TASK 4
// function calc(num1,operat,num2){
    

//         if(operat==="+"){
//               return num1+num2
//         }else if(operat==="-"){
    
//             return num1-num2function calcCircumference(){
//     var c=parseFloat( prompt("Enter circle radius"))
//     var d=(2*(3.14)*c);
//     document.write("The Circumference of the circle is :"+" "+d+"<br>")

//     function calcArea(){
//         var e=(3.14*c)
//         document.write("The area of circle is : "+" "+e+"<br>")
//     }
//     calcArea();
// }
// calcCircumference();
//         }
//         else if( operat==="/"){
//             return num1/num2
    
//         }else {
    
//             return num1*num2
//         }
    
//     }
//     var result=calc(7,"*",2);
//     var result1=calc(8,"+",2);
//     var result2=calc(10,"-",2);
//     var result3=calc(10,"/",2);
//     var result4=calc(100,"%",3);
//     document.write(result) 
//     document.write(result1+"<br>") 
//     document.write(result2+"<br>") 
//     document.write(result3+"<br>") 
//     document.write(result4+"<br>")  

// TASK 5

//  function sq(c){

    //     var a=+prompt("Enter your first number:");
    //     if (a === 0) {  
    //         return 1;  
    //         document.write(a)
    //     } 
    //     else {  
    //         return a * sq( a - 1 );
    //         document.write(a)  
    //     } 
    // }
    // sq();          


// TASK 6

// function user(){

//      var a=parseInt(prompt("Enter Starting number:"))
//      var b=parseInt(prompt("Enter Ending number:"));
    
// for (i = a; i < b; i++) {
//     document.write(  i + "<br>");
//   }
   
// }
// user();       

// TASK 8

//  function nest(){

    //     var a=parseInt(prompt("Enter Base number:"))
    //      var b=parseInt(prompt("Enter Perpendicular number:"));
    //      var c= (a*a)+(b*b);
    //      document.write("The value of Hypotenius is"+" "+c+"<br>")
    
    
    // function square(){
    
    //     var c= a*4;
    //     document.write("The value of Square is"+" "+c)
    // }
    // square();
    // }
    // nest();

// TASK 9

// function rect(){
// var a=parseInt(prompt("Enter width of a triangle"));
// var b= parseInt(prompt("Enter height of a triangle"));
// var c=a*b;
// document.write("The Area Of a Triangle is : "+" "+c)

// }
// rect();     


// TASK 10

// function pal(){



    // var word=prompt("Enter your word");
    // var check="";
    // for(var i=word.length - 1; i>=0; i--){
    // check += word[i];
    // }
    // //document.write(word,check)
    // if(word===check){
    //     document.write(word+" "+ "is palandrome word")
    // }else{
    //     document.write(word+" "+ "is not  palandrome word")
    // }
    
    // }
    // pal(); 

// TASK 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));  

// TASK 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));


// TASK 13

// function str_count(str1)
// {
//   var str_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (str_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(str_count("The quick brown fox"));

// TASK 14
// function calcCircumference(){
//     var c=parseFloat( prompt("Enter circle radius"))
//     var d=(2*(3.14)*c);
//     document.write("The Circumference of the circle is :"+" "+d+"<br>")

//     function calcArea(){
//         var e=(3.14*c)
//         document.write("The area of circle is : "+" "+e+"<br>")
//     }
//     calcArea();
// }
// calcCircumference();


