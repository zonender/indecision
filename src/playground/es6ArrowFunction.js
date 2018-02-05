/*
(1)
Before running this command, close any previously running instances of babel in any open terminal
by hitting Ctrl+C then cd into the project folder.

babel command transpiles jsx into ES5, this commands must be ran before the live-server command, you have to run this command
everytime you make changes.

src/playground/es6ArrowFunction.js is the source file we are working on

public/scripts/app.js is the output file

RUN: babel src/playground/es6ArrowFunction.js --out-file=public/scripts/app.js --presets=env,react

A better alternative is to run babel watch:

babel watch command, this commands runs in the background and monitors the source code, anytime you save it will automatically 
transpile the code to ES5, much more effeciant than the one above.

RUN: babel src/playground/es6ArrowFunction.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

/*
(2)
Before running this command, close any previously running instances of live-server in any open terminal
by hitting Ctrl+C then cd into the project folder

cd into the project folder
live-server command, public is the folder containing the files u want to serve.
Run: live-server public
*/

//normal anaymous function
//======================================================
console.log('//(01)===========================================================================');
const squareAnanymous = function (x) {
    return x * x;
};

console.log('normal anaymous function answer = '+ squareAnanymous(7));

//(02)
//normal  function
//======================================================
console.log('//(02)===========================================================================');
function square(x) {
    return x * x;
};

console.log('normal function answer = '+ square(4));

//(03)
//arrow function, can not be named and can not be called by name, just like ananymous functions they have to be assigned toa  variable,
//then you can reference the variable
//======================================================
console.log('//(03)===========================================================================');
const squareArrow = (x) => {
    return x * x;
};  

console.log('arrow function answer = '+ squareArrow(9));

//(04)
//when we have a single expression such as return x * x; we can use this simple and concise syntax for arrow functions:
//======================================================
console.log('//(04)===========================================================================');
const squareArrowSimple = (x) => x * x;

console.log('concise arrow function answer = '+ squareArrowSimple(10));

//(05)
// return first name from fullname (using the full syntax)
//======================================================
console.log('//(05)===========================================================================');
const getFDNameLong = (myFullName) => {
 return myFullName.split(' ')[0];
};

console.log('Your first name is ' + getFDNameLong('Asim Abdelgadir'))

//(06)
// return first name from fullname (using the concise syntax)
//======================================================
console.log('//(06)===========================================================================');
const getFDNameShort = (myFullName) => myFullName.split(' ')[0];
   
console.log('Your first name is ' + getFDNameShort('Asim Abdelgadir'))

//(07)
//the argument function is no longer bound to arrow functions
//======================================================
console.log('//(07)===========================================================================');
const add = function (a, b) {
    console.log(arguments) //this will not work with arrow functions
    return a + b;
};

console.log('function with arguments,  1 + 9 = ' + add(1, 9));

//(08)
//the "this" keyword is no longer bound to arrow functions.
//when we define a function in an object, in this case the user object, the "this" keyword is bound to 
//the user object, which means when I type this.name inside the function I have access to the name property of the user object
//======================================================
console.log('//(08)===========================================================================');
const user08 = {
    name: 'Asim',
    cities: ['algadarif', 'new york', 'weikfield'],
    printPlacesLived08: function () {
        console.log(this.name);
        console.log(this.cities);

        //this function will cause the app to crash because "this" inside the foreach function is no longer
        //bound to "this" of the user object
        this.cities.forEach( 
            function (city) {
                console.log(this.name + 'has lived in: ' + city);
            }
        );
    }
};

user08.printPlacesLived08();

//(09)
//one of the workarounds for (08) is to use a varaible between the two functions:
//======================================================
console.log('//(09)===========================================================================');
const user09 = {
    name: 'Asim',
    cities: ['algadarif', 'new york', 'weikfield'],
    printPlacesLived09: function () {
        console.log(this.name);
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function (city) {
                console.log(that.name + ' has lived in: ' + city);
        });
    }
};

user09.printPlacesLived09();

//(10)
//another workaround for (08) is to use an arrow function:
//======================================================
console.log('//(10)===========================================================================');
const user10 = {
    name: 'Asim',
    cities: ['algadarif', 'new york', 'weikfield'],
    printPlacesLived10: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
                console.log(this.name + ' has lived in: ' + city);
        });
    }
};

user10.printPlacesLived10();

// //(11)
// //this will also raise an error, because the arrow function no longer binds its own this, 
// //a "this" inside an arrow function does not bind and refer to the user object to which it belongs,
// // "this" inside an
// //======================================================
// console.log('//(11)===========================================================================');
// const user11 = {
//     name: 'Asim',
//     cities: ['algadarif', 'new york', 'weikfield'],
//     printPlacesLived11: () => {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach((city) => {
//                 console.log(this.name + ' has lived in: ' + city);
//         });
//     }
// };

// user11.printPlacesLived11();