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
* [Contribution Guidelines](#contribution)
* [test Instructions](#tests)
* [Questions](#Questions)




### Installation Instructions
* ${data.installation}

### Usage Information
* ${data.usage}

### Contribution Guidelines
${data.contribution}

### Test Instructions
${data.tests}

## Questions
${data.questionsForMe}

${data.github}
${data.email}
`
};

// Exports the function
module.exports = generateReadme;