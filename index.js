
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

const projectName = () => {
    console.log(
        `
        ============
        Project Name
        ============
        `
    )
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project-name',
            message: 'Please enter the name of your project. (Required)',
            validate: ProjectNameInput => {
                if (ProjectNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        }
    ])
};

const projectDetails = () => {
    console.log(
        `
        ===============
        Project Details
        ===============
        `
    )
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'description',
                message: 'What is the description of your project? (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('What is the description of your project?')
                        return false;
                    }
                }
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
};



    const licensePrompt = () => {
        // If there is no license array, create one!
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
        console.log(
            `
            =========
            User Info
            =========
            `
        )
        return inquirer.prompt([
            {
                type: 'input',
                name: 'Github-userName',
                message: 'Please enter your github username. (Required)',
                validate: githubName => {
                    if (githubName) {
                        return true;
                    } else {
                        console.log('Please enter your github username.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address.'
            }
        ])
    };

    projectName()
    .then(projectDetails)
    .then(details => console.log(details))
    .then(answers => console.log(answers))
    .then(licensePrompt)
    .then(licensePrompt => console.log(licensePrompt))
    .then(userInfo)
    .then(user => console.log(user));


/* 
We can most likely use this code for later
if (!licenseData.license) {
            licenseData.license = [];
        }
*/




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




