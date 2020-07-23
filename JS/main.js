// var - Is a keyword - used for? - It is used for init variables - holds a value

// let and const = var

// var a = 10; // number; // ES5 - Not suggested to use anymore
// var b = 'Nilam' // String
// var c = true; // Boolean

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));

// var d = {}; // Object
// var e = []; // Array




// var a; // DEFAULT VALUE = Undefined
// console.log(a);

// var b = null;
// b = 10;
// b = 'Nilam';
// console.log(b); // Nilam - gets printed

// var b = 123.456; // number // typeof

// var s = "Nilam";
// var t = "D'cruz"; // " " is a very good practice

// variable can not start with special characters - it can be _kjrf87

// var a = 10;
// var b = 20;
// var result = a+b; // a-b, a*b, a/b, a%b

// console.log(a+b);
// console.log(result);

// ++ Inc --> 2 types --> Post Inc, Pre Inc
// -- Dec --> 2 types --> Post Dec, Pre Dec


//var a = 10;
// a++; // Post Inc
// ++a; // Pre Inc
//console.log(a);

//console.log(a++); //10
//console.log(a); //11

//console.log(++a); //11
//console.log(a); //11

// console.log(a--); // 10
// console.log(a); // 9

// console.log(--a); //9
// console.log(a); //9


//CONDITION
//if (false) { //Sun rises in West?
  //  console.log("YES");// YES
//} else {
  // console.log("NO"); // NO
//}

//var a = 10; // assignment operator
//var b = 20;  // '10'

// >
// <
// ==
// ===
// >=
//<=

// !== --> It will compare only values
// !=== --> It will check for the type

// == -> It will compare only values
//=== -> It will check for the type strictly

//if(a>b) { // false // (a<b), (a==b), (a===b), (a!=b), (a>=b)
 //   console.log("YES"); //YES
//} else {
  //  console.log("NO"); // NO
//}

// LOGICAL OPERATORS
// && - Logical AND
// || - Logical OR
// ! - NOT

// var a = 10; // assignment operator
// var b = '10';

// var c = 90;
// var d = 80;

// var e = 88;
// var f = 50;

// // if (a=b && (c>d && e>f)) {
//   if (a>b) {
//   console.log("YES"); 
// } else if(a==b){
//   console.log("a and b are equal");
// } 
// else {
//   console.log("NO");
// }

// var a = 10; // assignment operator
// var b = '10';

// var c = 90;
// var d = 80;

// var e = 88;
// var f = 50;
//   if (!(a==b)) { // a==b -> !True -> NOT TRUE = FALSE
//   console.log("YES"); // YES
// } else if(!(a===b)){ // NOT FALSE -> TRUE
//   console.log("a and b are equal"); // a and b are equal
// } 
// else {
//   console.log("NO"); // NO
// }

//-->SWITCH<--

// var a = 1;
// switch (a) {
//   case 1:
//     console.log("ONE");
//     break;
//   case 2:
//     console.log("TWO");
//     break;
//   default:
//       console.log("IDK!");
//     break;
// }

//-> FOR LOOP<- // ENTRY CONTROLLED
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//--> WHILE<-

// var i=0;
//  while(i<5) { //ENTRY CONTROLLED LOOP
//    console.log(i);
//    i++;  
//  } //CAREFULL -> YOU'LL LEAD TO INFINITE LOOP IF you dont use i++;

 //--> DO WHILE <--
 //var i = 6;
 // THE LOOP WILL RUN AT LEAST ONCE
//  do { // EXIT CONTROLLED LOOP
//    console.log(i);
//    i++;
//  } while (i<5); //CAREFULL -> YOU'LL LEAD TO INFINITE LOOP IF you dont use i++;

//PRINT ODD NUMBERS 
//for(var i=1; i<=10; i++)
// { 
//   if((i%2)==1)  // if((i%2)==0) -> Print Even Numbers
//   {
  //console.log(i);
// }
//}
 
// ASSIGNMENT -1
for (let i = 1; i<= 100 ; i++) 
 {
   if (i % 2 == 0 && i%5 == 0) {
       console.log("TooFoo");
   }
   else if (i%2==0){
        console.log("Too");
    }
    else if (i%5 == 0) {
        console.log("Foo");
    }
    else {
      console.log(i);
    }
 }

 
// Adding Number 1 to 20

 var RESULT = 0;
 for (let a = 1; a <=20; a++){
  RESULT = RESULT + a;
}
 console.log("RESULT = " + RESULT);








