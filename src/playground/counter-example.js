//cd into the project folder

//(1)
//babel command to transpile jsx, this commands must be ran before the live-server command, you have to run this command
//everytime you make changes.
//RUN: babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react

//babel watch command, this commands runs in the background and monitors the source code, anytime you save it will automatically 
//transpile the code to ES5, much more effeciant than the one above.
//RUN: babel src/playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch

//(2)
//cd into the project folder
//live-server command, public is the folder containing the files u want to serve
//Run: live-server public

let count = 0;

const addOne = () => {
    //change the count variable
    count++;
    //call the function that generates the template then renders it
    renderCounterApp();
};

const reset = () => {
    //change the count variable
    count = 0;
    //call the function that generates the template then renders it
    renderCounterApp();
};

const minusOne = () => {
    //change the count variable
    count--;
    //call the function that generates the template then renders it
    renderCounterApp();
};



const renderCounterApp = () => {

    //generate the template
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={minusOne}>-1</button>
        </div>
        );

        //render the template
        ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();