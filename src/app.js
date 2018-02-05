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

console.log('app.js is running')

const appObj = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        renderAddOptions();
    }
};

const onRemoveAll = () => {
    appObj.options = [];
    renderAddOptions();
};

const appRoot = document.getElementById('app');

const renderAddOptions = () => {

    //generate the template
    const appTemplate = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{appObj.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Options</button>
            </form>
        </div>
    );
    
    //some attributes like id work exactly the same in jsx as in html, but class does not work in jsx, we have to use className
    //for a list of all react dom elements and attributes: https://reactjs.org/docs/dom-elements.html
    let count = 0;

    const addOne = () => {
        count++;
        console.log('addOne', count);
    };

    const minusOne = () => {
        console.log('minusOne');
    };

    const resetNumber = () => {
        console.log('resetNumber');
    };

    const appTemplate2 = (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={resetNumber}>Reset</button>
        <button onClick={minusOne}>-1</button>
      </div>  
    );

    //render the template
    // ReactDOM.render(appTemplate, appRoot);
    ReactDOM.render(appTemplate2, appRoot);

};

renderAddOptions();
    