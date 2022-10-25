const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
     .prompt ([ 
{
    type: 'input',
    message: 'Whats your projects name?',
    name: 'title',
},
{
   type: 'input',
  message: "Give a description of your project",
  name: 'description',
  },
{
    type: 'input',
    message: 'How would you install this application ?',
    name: 'installation ',
},
{
    type: "input",
    message:"How would you use this application?",
    name: "usage",
},
{
    type: "input",
    message:"Who all contributed on the application?",
    name: "contribution",
},
{
    type: "input",
    message:"Was the application tested? ",
    name: "test",
},
{
    type: "list",
    message:"What license did you use ?",
    name: "license",
    choices: [
        'MIT',
        "GNU",
        "None",
 ]
},

   { type: "input",
    message: "What is your Github username?",
    name: "username",
},
{
    type: 'input',
    message: 'Enter email address',
    name: 'email',
},
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
