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
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions)




### Installation
* ${data.installation}
* ${data.usage}

### Contributions
${data.contribution}
${data.tests}

## Questions
${data.questionsForMe}

${data.github}
${data.email}
`
};

// Exports the function
module.exports = generateReadme;