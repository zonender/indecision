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
    name: "Asim",
    age: 45,
    occupation: "DevOps Engineer",
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

//using an arrow function
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
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location2: ',
            location
        );
    }
}

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
        'Name: ',
        bioObj.name ? bioObj.name.toUpperCase() + '!' : 'Anonymous'
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
