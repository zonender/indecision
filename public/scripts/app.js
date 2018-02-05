'use strict';

//cd into the project folder

//(1)
//babel command to transpile jsx, this commands must be ran before the live-server command, you have to run this command
//everytime you make changes.
//RUN: babel src/app.js --out-file=public/scripts/app.js --presets=env,react

//babel watch command, this commands runs in the background and monitors the source code, anytime you save it will automatically 
//transpile the code to ES5, much more effeciant than the one above.
//RUN: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

//(2)
//cd into the project folder
//live-server command, public is the folder containing the files u want to serve
//Run: live-server public

console.log('app.js is running');

var appObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderAddOptions();
    }
};

var onRemoveAll = function onRemoveAll() {
    appObj.options = [];
    renderAddOptions();
};

var appRoot = document.getElementById('app');

var renderAddOptions = function renderAddOptions() {

    //generate the template
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
            'p',
            null,
            appObj.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            )
        )
    );

    //some attributes like id work exactly the same in jsx as in html, but class does not work in jsx, we have to use className
    //for a list of all react dom elements and attributes: https://reactjs.org/docs/dom-elements.html
    var count = 0;

    var addOne = function addOne() {
        console.log('addOne');
    };

    var minusOne = function minusOne() {
        console.log('minusOne');
    };

    var resetNumber = function resetNumber() {
        console.log('resetNumber');
    };

    var appTemplate2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: resetNumber },
            'Reset'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        )
    );

    //render the template
    // ReactDOM.render(appTemplate, appRoot);
    ReactDOM.render(appTemplate2, appRoot);
};

renderAddOptions();
