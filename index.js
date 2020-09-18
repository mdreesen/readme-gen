
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

const fs = require('fs');
const generateReadme = require('./readme-template');

const readmeDataArgs = process.argv.slice(2, process.argv.length);

const title = readmeDataArgs[0];

// -=- three arguments -=-
// 1. generating the README tile
// 2. calling the generateMarkdown function, this is the data being written
// 3. error handling, failures and successes
fs.writeFile('README.md', generateReadme(title), err => {
    if (err) throw new Error (err);

    console.log('Added readMe!')
})


// const inquirer = require('inquirer');

// onst commandLineArgs = process.argv;

//console.log(commandLineArgs);

// const readmeDataArgs = process.argv.slice(2, process.argv.length);
 // console.log(readmeDataArgs);

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
  console.log(questions());
  */

// function to write README file
//function writeToFile(fileName, data) {
//}

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
