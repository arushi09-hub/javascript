let age=25;
let year = 2020;
console.log(age,year);
age=30;
console.log(age);

//to make the value static

const points = 100;
console.log(points);

//older way to create variables
var score = 75;
console.log(score);

//strings
//either use single or double qoutes
console.log('hello world');
let email = 'arushishukla09@gmail.com'
console.log(email);


//string contatenation

let firstname ='arushi';
let lastname='shukla';
let fullname = firstname+' '+lastname;
console.log(fullname);


//getting characters
//counts from 0 position
console.log(fullname[8]);


//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
 //( means it is a method)
 let result = fullname.toLowerCase();

 console.log(result);

 let index=email.indexOf("@");

 console.log(index);

 //common string methods

//  let result1 = email.lastIndexOf('a');

// let result1 = email.slice(0,6);

// let result1= email.substr(4,10); 
//substr strts from the pos mentioned and move to the next 5 or 10 letters mentioned
// eg starting from 4 to the nest 10 characters

// let result1 = email.replace('a','s'); //replace first one only

// console.log(result1);

//numbers data type
let radius = 10;
const pi=3.14;
console.log(radius , pi);

//order of operation-B I D M A S ** means power
// let result1=5*(10-3)**2;
let lines =10;
lines +=10;
console.log(lines);
  
//NaN - not a number
// let result1= 'the blog has '+lines+' '+'likes';
// console.log(result1);

//template strings
const title = 'Best reads of 2020';
const author = 'Mario';
const likes ='30';


//concatenation way
//using + sings


//template string way(preferable)
let result1=`The blog called ${title} by ${author} has ${likes} likes`;
console.log(result1);


//creating html templates
let html =`
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes}</span>
`;
console.log(html);

//Array
let ninjas =['a','b','c','d'];
ninjas[1] = 'e';
console.log(ninjas);

// let ages =[20,30,40,50];
// console.log(ages);

// let random = ['s',50,'dh',true];

// console.log(random);

// console.log(ninjas.length);

// let ninjass=ninjas.join('*');
// let concatenate = ninjas.concat(['e','f','g']);
let rr=ninjas.push('h')
console.log(rr);

//null and undefined

let age1 = null; //not assigning value to it yet
//null is not explicility defined
console.log(age1,age1+3,`age is ${age1}`);


//boolean
console.log(true,false,"true","false");
//method on ways on numbers
let email1 = 'arushishukla09@gmail.com';
let result2=email1.includes('@');
console.log(result2);

//comparison operators

let age2=25;
console.log(age==25);
console.log(age==57);
console.log(age2==25);

// === means strict comparison
//type conversion

// let score = '100';
// score = Number(score);
// console.log(score+1);
// console.log(typeof score);



