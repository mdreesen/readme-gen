
// array of questions for user
// const questions = [

// ];

// function to write README file
//  writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

const inquirer = require('inquirer');

// console.log(inquirer);
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project?'
            },
            {
                input: 'input',
                name: 'installation-instructions',
                message: 'What is the command to install your project?',
                default: 'npm i'
            },
            {
                type: 'input',
                name: 'usage-information',
                message: 'What does the user need to know about using this repo?'
            },
            {
                type: 'input',
                name: 'contribution-guidelines',
                message: 'What does the user need to know about contributing to this repo?'
            },
            {
                type: 'input',
                name: 'test-instructions',
                message: 'What command should be used to run tests for this project?'
            }
        ])
}



    const licensePrompt = licenseData => {
        // If there is no license array, create one!
        if (!licenseData.license) {
            licenseData.license = [];
        }
        console.log(
            `
            =============
            Add A License
            =============
            `
        );
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'license',
                    choices: ['Apache', 'GNU', 'NPM', 'BSD', 'Rust']
                }
            ])
    };

    const userInfo = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'Github-userName',
                message: 'Please enter your github username!'
            }
        ])
    }

    promptUser()
    .then(answers => console.log(answers))
    .then(licensePrompt)
    .then(licensePrompt => console.log(licensePrompt))
    //.then(licenseProject => {
    //    licenseData.license.push(licenseProject);
    //});

// const fs = require('fs');
// const generateReadme = require('./readme-template');

// const readmeDataArgs = process.argv.slice(2, process.argv.length);

// const title = readmeDataArgs[0];

// -=- three arguments -=-
// 1. generating the README tile
// 2. calling the generateMarkdown function, this is the data being written
// 3. error handling, failures and successes
// fs.writeFile('README.md', generateReadme(title), err => {
    // if (err) throw new Error (err);

    // console.log('Added readMe!')
// })




// array of questions for user
/*
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'description',
        message: 'Please enter a description about your Project.'
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'Please enter the installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Please enter (if any) contribution guidelines.' 
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Please enter test instructions for your project.'
    }
  ]);
};
*/