console.log('app.js is running')

////JSX - Requires Babel and webpack
var template = <p>This is JSX! from app.js - using watch</p>;

////Plain JS:
// "use strict";

// var template = React.createElement(
//   "p",
//   { id: "some id here" },
//   "This is Plain JS! from app.js"
// );

//These will run with or without Babel
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);