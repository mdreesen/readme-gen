const renderProjectName = name => {
    return `
    # ${name}
    `;
};

const renderProjectDescription = description => {
    return `
    # Description
    ${description}
    `;
};

const renderProjectInstallation = installation => {
    return `
    ## Installation
    ${installation}
    `
};

const renderProjectUsage = usage => {
    return `
    ## Usage
    ${usage}
    `
};

const renderProjectTests = tests => {
    return `
    # Tests
    ${tests}
    `
}

const renderProjectContribution = contribution => {
    return `
    # Contributions
    ${contribution}
    `
};

const generateReadme = data => {
    return `
        ${renderProjectName(data.name)}

        ${renderProjectDescription(data.description)}

        ${renderProjectInstallation(data.installation)}

        ${renderProjectUsage(data.usage)}

        ${renderProjectTests(data.tests)}

        ${renderProjectContribution(data.contribution)}
    `
};

module.exports = generateReadme;