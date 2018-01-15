'use strict';

//babel command
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

//babel watch command
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//live-server command, public is the folder containing the files u want to serve
//live-server public

console.log('app.js is running');

var appObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var bioObj = {
    name: 'Asim Abdelgadir',
    age: 45,
    occupation: 'DevOps Engineer',
    Location1: 'New York',
    Location2: 'New Jersey'
};

var myToday = new Date();
var month = new Array(12);
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

var myDay = new Array(7);
myDay[0] = "Sun";
myDay[1] = "Mon";
myDay[2] = "Tue";
myDay[3] = "Wed";
myDay[4] = "Thu";
myDay[5] = "Fri";
myDay[6] = "Sat";

var userDetailsAsOf1 = myToday.getDay() + ' ' + myToday.getDate() + ' - ' + (myToday.getMonth() + 1) + ' - ' + myToday.getFullYear();
var userDetailsAsOf2 = myDay[myToday.getDay()] + ' ' + myToday.getDate() + ' - ' + month[myToday.getUTCMonth()] + ' - ' + myToday.getFullYear();

// function getLocation (location) {
//     if (location) {
//         return location;
//     } else {
//         return 'Unknown'
//     };
// };


// //for the console only: this will not work, generates an error.
// const testuser1 = {
//     name: 'Asim',
//     cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
//     printPlacedILivedIn: function () {
//         console.log(this.name);
//         console.log(this.cities);

//         this.cities.forEach(function (city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// };
// testuser1.printPlacedILivedIn();

//for the console only: to access this from inside the regular function we had to use athe work around: const that = this;
var testuser2 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn: function printPlacedILivedIn() {
        console.log(this.name);
        console.log(this.cities);

        var that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
testuser2.printPlacedILivedIn();

//for the console only: we can also acces this using an arrow function
var testuser3 = {
    name: 'Asim',
    cities: ['Algadarif', 'Alfashir', 'Leeds', 'New York City', 'Jercey City'],
    printPlacedILivedIn: function printPlacedILivedIn() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};
testuser3.printPlacedILivedIn();

//using an arrow function with a function body
var getLocation1 = function getLocation1(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location1: ',
            location
        );
    }
};

//using a regular function
function getLocation2(location) {
    console.log(arguments); //just displays the args, does not wotk with arrow function.
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location2: ',
            location
        );
    }
}

//using function arrow in single line without a function body
var bioFullName = bioObj.name;
var getFName = function getFName(bioFullName) {
    return bioFullName.split(' ')[0];
};
var getLName = function getLName(bioFullName) {
    return bioFullName.split(' ')[1];
};

var appTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subtitle && React.createElement(
        'p',
        null,
        appObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

var bioTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'My Bio'
    ),
    React.createElement(
        'p',
        null,
        'Full Name: ',
        bioFullName ? bioFullName.toUpperCase() + '!' : 'Anonymous'
    ),
    React.createElement(
        'p',
        null,
        'F Name: ',
        getFName(bioFullName)
    ),
    React.createElement(
        'p',
        null,
        'L Name: ',
        getLName(bioFullName)
    ),
    bioObj.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        bioObj.age
    ),
    React.createElement(
        'p',
        null,
        'Occupation: ',
        bioObj.occupation
    ),
    getLocation1(bioObj.Location1),
    getLocation2(bioObj.Location2),
    React.createElement(
        'p',
        null,
        'As of: ',
        userDetailsAsOf1
    ),
    React.createElement(
        'p',
        null,
        'As of: ',
        userDetailsAsOf2
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(bioTemplate, appRoot);
