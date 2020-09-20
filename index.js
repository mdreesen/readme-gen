const inquirer = require('inquirer');
const generateReadme = require('./readme-template');
const { writeFile, copyFile } = require('./utils/generate-readme.js')


const projectName = () => {
    console.log(
        `
        =====================
        Lets Make Your ReadMe
        =====================
        `
    )
    return inquirer.prompt([{
            type: 'input',
            name: 'projectName',
            message: 'Please enter the name of your project. (Required)',
            validate: ProjectNameInput => {
                if (ProjectNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.');
                    return false;
                }
            }
        },
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
            name: 'tests',
            message: 'What command should be used to run tests for this project?',
            default: 'npm test'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['Apache', 'GNU', 'NPM', 'BSD', 'Rust', 'None']
        },
        {
            type: 'input',
            name: 'github',
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
            name: 'questionsForMe',
            message: 'Please enter your question here',
            when: ({ questions }) => questions
        },
    ])
};


projectName()
    .then(projectName => {
        return generateReadme(projectName)
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