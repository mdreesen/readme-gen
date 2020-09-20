const generateReadme = data => {
    return `
    # ${data.projectName}

    # Description
    ${data.description}

    # Installation
    ${data.installation}

    ${data.usage}

    ${data.contribution}

    ${data.tests}

    ${data.license}

    # User Info

    ## Github user
    ${data.github}

    ## Email
    ${data.email}

    ${data.questions}

    ${data.questionsForMe}
    `
};

/*
const generateReadme = data => {
    return `
    # ${data.project-name}

    ${data.description}

    ${data.installation}

    ${data.usage}

    ${data.tests}

    ${data.license}

    ${data.contribution}

    ${data.github}

    ${data.email}
    `
};
*/

module.exports = generateReadme;