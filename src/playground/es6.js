/*
(1)
Before running this command, close any previously running instances of babel in any open terminal
by hitting Ctrl+C then cd into the project folder.

babel command transpiles jsx into ES5, this commands must be ran before the live-server command, you have to run this command
everytime you make changes.

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

console.log('app.js is running')

const appObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

const bioObj = {
    name: 'Asim Abdelgadir',
    age: 45,
    occupation: 'DevOps Engineer',
    Location1: 'New York',
    Location2: 'New Jersey'
};

const myToday = new Date();
const month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";

const myDay = new Array(7);
myDay[0] = "Sun";
myDay[1] = "Mon";
myDay[2] = "Tue";
myDay[3] = "Wed";
myDay[4] = "Thu";
myDay[5] = "Fri";
myDay[6] = "Sat";


const userDetailsAsOf1 = myToday.getDay() + ' ' + myToday.getDate() + ' - ' + (myToday.getMonth() + 1) + ' - ' + myToday.getFullYear();
const userDetailsAsOf2 = myDay[myToday.getDay()] + ' ' + myToday.getDate() + ' - ' + month[myToday.getUTCMonth()] + ' - ' + myToday.getFullYear();

// function getLocation (location) {
//     if (location) {
//         return location;
//     } else {
//         return 'Unknown'
//     };
// };


// //for the console only: this will not work, generates an error.
// //"this" inside the regular foreach function has no access to "this" of testuser1
// const testuser1 = {
//     name: 'Asim',
//     cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
//     printPlacedILivedIn: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(function (city) {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// testuser1.printPlacedILivedIn();

//for the console only: to access "this" of testuser2 from inside the regular foreach function we had to use a work around: const that = this;
const testuser2 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn: function () {
        console.log(this.name);
        console.log(this.cities);

        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
testuser2.printPlacedILivedIn();

//for the console only: we can also acces "this" of testuser3 using an arrow function within the foreach block, 
//because an arrow function doesn't bind its own "this" value
//"this" inside the arrow function is referring to the object testuser3
const testuser3 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
testuser3.printPlacedILivedIn();

//This also works, and we will not need to use the function key word again
const testuser5 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
testuser5.printPlacedILivedIn();

// //this will generate an error, because the printPlacedILivedIn arrow function does not bind its own "this" value,
// //"this" no longer eqauls the testuser4 object it goes to the parent scope which is the parent scope
// const testuser4 = {
//     name: 'Asim',
//     cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
//     printPlacedILivedIn: () => {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach( (city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// testuser4.printPlacedILivedIn();

//map method returns an array (Short Form)
const testuser6 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn () {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(testuser6.printPlacedILivedIn());

//map method returns an array (Long Form)
const testuser7 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn () {
        const cityMessage = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessage;
    }
};
console.log(testuser7.printPlacedILivedIn());

//map method returns an array
const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

//using an arrow function with a function body
const getLocation1 = (location) => {
        if (location) {
        return <p>Location1: {location}</p>;
    }
};

//using a regular function
function getLocation2 (location) {
    console.log(arguments) //just displays the args, does not wotk with arrow function.
    if (location) {
        return <p>Location2: {location}</p>;
    }
}

//using function arrow in single line without a function body
let bioFullName = bioObj.name;
const getFName = (bioFullName) => bioFullName.split(' ')[0];
const getLName = (bioFullName) => bioFullName.split(' ')[1];

const appTemplate = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const bioTemplate = (
    <div>
        <h1>My Bio</h1>
        <p>Full Name: {bioFullName ? bioFullName.toUpperCase() + '!' : 'Anonymous'}</p>
        <p>F Name: {getFName(bioFullName)}</p>
        <p>L Name: {getLName(bioFullName)}</p>
        {bioObj.age >= 18 && <p>Age: {bioObj.age}</p>}
        <p>Occupation: {bioObj.occupation}</p>
        {getLocation1(bioObj.Location1)}
        {getLocation2(bioObj.Location2)}
        <p>As of: {userDetailsAsOf1}</p>
        <p>As of: {userDetailsAsOf2}</p>
    </div>
    );

const appRoot = document.getElementById('app');

ReactDOM.render(bioTemplate, appRoot);