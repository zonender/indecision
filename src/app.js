
console.log('app.js is running')

var userDetailsName = 'Asim';
var userDetailAge = 45;
var userDetailsOccupation = 'DevOps Engineer';

var myToday = new Date();;
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

var myBioTemplate = (
    <div>
        <h1>My Bio</h1>
        <p>Name: {userDetailsName.toUpperCase() + '!'}</p>
        <p>Age: {userDetailAge}</p>
        <p>Occupation: {userDetailsOccupation}</p>
        <p>As of: {userDetailsAsOf1}</p>
        <p>As of: {userDetailsAsOf2}</p>
    </div>
    );

//These will run with or without Babel
var appRoot = document.getElementById('app');

ReactDOM.render(myBioTemplate, appRoot);