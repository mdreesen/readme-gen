const generateReadme = data => {
    return `
# ${data.projectName}

 ### Description
${data.description}

## Table Of Contents
* [Installation](#installation)
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions)




### Installation
* ${data.installation}
* ${data.usage}

### Contributions
${data.contribution}
${data.tests}

# License
${data.license}

## Questions
${data.questionsForMe}

${data.github}
${data.email}
`
};

module.exports = generateReadme;