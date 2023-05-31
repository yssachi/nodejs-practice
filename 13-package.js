
//* 8.) NPM COMMAND
// npm - global command, comes with code
// npm -v (npm version)

// => local dependency - use it only in this particular object
// npm i <packageName>

// => global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file ( stores important info about project/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)



//showcasing what lodash do
// importing lodash package
const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world')

// when we upload this folder to github node_modules will not be able to download by the user because it is in gitignore
// when uploading, node_modules should not be included because it has many files
// if ever they download the folder and to be able to access the node_module what they need to do is to 'npm install' so that the node_modules for a specific package will be installed


//here is the command for dev dependencies
// npm i nodemon -D
// after installing go to package.json
// in script type this ==>
// "start" : "node app.js",
// => type in terminal 'npm start
// "dev": "nodemon app.js"
// => type in terminal 'npm run dev'

//to uninstall package
// => npm uninstall <packagename>
// ex: npm uninstall lodash 


