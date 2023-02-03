const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



// TODO: Create an array of questions for user input
let Inputquestions = [
    {
        type: "input",
        message: "What is the description of your project?",
        name: "rmDescription",
    },
    {
        type: "input",
        message: "Title of project?",
        name: "rmTitle",
    },
    {
        type: "input",
        message: "What were the installation steps to the project?",
        name: "rmInstallation",
    },
    {
        type: "input",
        message: "What is the usage information for the project?",
        name: "rmUsage",
    },
    {
        type: "input",
        message: "Who were the authors to the project??",
        name: "rmAuthors",
    },
    {   type: "input",
        message: "What is your github account?",
        name: "rmGitHub"
    },
    {   type: "input",
        message: "Email address?",
       name: "rmEmailAddress"
    },
    {
        type: "input",
        message: "Testing instructions (if any)?",
        name: "rmTestingInstructions",
    },
    {
        type: "list",
        name: "rmLicense",
        message: "Which license are you using for this project?",
        choices: [
        "Apache License 2.0",
        "BSD 3-Clause License",
        'N/A'
       
    ],
}


];

// TODO: Create a function to write README file
const generateReadMe = createFile => {
    return new Promise((resolve, reject)=> {
        fs.writeFile('./generatedReadMe.md', createFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(Inputquestions)
    .then(function(answers) {

        let createFile = generateMarkdown(answers);
        console.log(typeof createFile);
        generateReadMe(createFile);

    })
}

// Function call to initialize app
init();
