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


