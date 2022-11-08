const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions =[ 
{
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate(answer){
        if(!answer){
            return "Enter Name"
        }
        return true
    }
},
{
   type: 'input',
  message: "Give a description of your project",
  name: 'description',
  validate(answer){
    if(!answer){
        return "Enter a description"
    }
    return true
}
  },
{
    type: 'input',
    message: 'How would you install this application ?',
    name: 'installation ',
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
},
{
    type: "input",
    message:"How would you use this application?",
    name: "usage",
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
},
{
    type: "input",
    message:"Who all contributed on the application?",
    name: "contribution",
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
},
{
    type: "input",
    message:"Was the application tested? ",
    name: "test",
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
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
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
},
{
    type: 'input',
    message: 'Enter email address',
    name: 'email',
    validate(answer){
        if(!answer){
            return "Invalid Input"
        }
        return true
    }
},
];

//function to write README file
function writeToFile(readmefile, data) {
   fs.writeFile('ReadME.md', data, function(err){
      if (err) throw err;
      console.log('File Created');
   })
}

// function to initialize app
function init() {
 inquirer.prompt(questions)
   .then(function(data){
     writeToFile('README.md',generateMarkdown(data));
      console.log(data)
    })
}

// Function call to initialize app
init();
