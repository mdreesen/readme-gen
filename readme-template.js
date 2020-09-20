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

module.exports = generateReadme;