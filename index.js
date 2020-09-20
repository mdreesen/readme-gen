const inquirer = require('inquirer');
// console.log(inquirer);
const fs = require('fs');
const path = require('path');
const generateReadme = require('./readme-template');
const { writeFile, copyFile } = require('./utils/generate-readme.js')


const projectName = () => {
    console.log(
        `
        ============
        Project Name
        ============
        `
    )
    return inquirer.prompt([{
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
    }])
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
        .prompt([{
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
                name: 'installation',
                message: 'What is the command to install your project?',
                default: 'npm i'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What does the user need to know about using this repo?'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'What does the user need to know about contributing to this repo?'
            },
            {
                type: 'input',
                name: 'test-instructions',
                message: 'What command should be used to run tests for this project?',
                default: 'npm test'
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
    return inquirer.prompt([{
        type: 'list',
        name: 'license',
        choices: ['Apache', 'GNU', 'NPM', 'BSD', 'Rust']
    }])
};

const userInfo = () => {
    console.log(
        `
            =========
            User Info
            =========
            `
    )
    return inquirer.prompt([{
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
        },
        {
            type: 'confirm',
            name: 'questions',
            message: 'Would you like to ask me any questions?',
            default: false
        },
        {
            type: 'input',
            name: 'questions for me',
            message: 'You can reach me via email at "mdreesen90@gmail.com" with your question(s), thank you!',
            when: ({ questions }) => questions
        }

    ])
};


projectName()
    .then(projectDetails)
    .then(projectDetails => {
        return generateReadme(projectDetails);
    })
    .then(licensePrompt)
    .then(licensePrompt => {
        return generateReadme(licensePrompt);
    })
    .then(userInfo)
    .then(userInfo => {
        return generateReadme(userInfo)
    })
    .then(pageReadme => {
        return writeFile(pageReadme)
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse)
    })
    .catch(err => {
        console.log(err);
    })