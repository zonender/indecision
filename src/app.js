//babel command
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

//babel watch command
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//live-server command, public is the folder containing the files u want to serve
//live-server public

console.log('app.js is running')

const appObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

const bioObj = {
    name: "Asim",
    age: 45,
    occupation: "DevOps Engineer",
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

//using an arrow function
const getLocation1 = (location) => {
        if (location) {
        return <p>Location1: {location}</p>;
    }
};

//using a regular function
function getLocation2 (location) {
    if (location) {
        return <p>Location2: {location}</p>;
    }
}

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
        <p>Name: {bioObj.name ? bioObj.name.toUpperCase() + '!' : 'Anonymous'}</p>
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