

// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Content 
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [License](#License)
  - [Support](#Support)

  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## License
  ${data.license}

  ## Support
  ${data.email}
  ${data.username}
`;
}

module.exports = generateMarkdown;
