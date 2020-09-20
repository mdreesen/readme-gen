// Getting the license badge
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return ''
};

// This is where the ReadMe data is put into
const generateReadme = data => {
    return `
# ${data.projectName}

 ### Description
${data.description}

# License
${renderLicenseBadge(data.license)}

## Table Of Contents
* [Installation](#installation)
* [Usage Information](#usage)
* [Contribution Guidelines](#contributions)
* [test Instructions](#tests)
* [Questions](#Questions)




### Installation
* ${data.installation}

### Usage
* ${data.usage}

### Contributions
${data.contribution}

### Tests
${data.tests}

## Questions
${data.questionsForMe}

Github username:
* [${data.github}](https://github.com/${data.github})

* If you have any questions, you can reach me at ${data.email}
`;
};

// Exports the function
module.exports = generateReadme;