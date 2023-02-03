//  Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license === 'Apache License 2.0') {
    licenseBadge = '![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'BSD 3-Clause License') {
    licenseBadge = '![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
  } else {
    licenseBadge = '';
  }
  return licenseBadge
};

//  Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache License 2.0'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'BSD 3-Clause License') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    licenseLink = '';
  }

  return licenseLink;

}

//  Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'N/A') {
    licenseSection = '';
  } else {
    licenseSection = `License used: ${license}`
  } 
  return licenseSection;
  }



//  Created a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # README Generator
  ## ${renderLicenseSection(answers.rmLicense)} ${renderLicenseBadge(answers.rmLicense)}
  ### ${renderLicenseLink(answers.rmLicense)}
  ## Table of Contents
  ### * [Description](#description)
  ### * [Project](#title)
  ### * [Installation](#installation)
  ### * [Project Usage](#usage)
  ### * [Project Authors](#authors)
  ### * [Github](#github)
  ### * [Email](#emailAddress)
  ### * [Testing Instructions](#testingInstructions)
  ### * [License Info](#license)
  ## Description
  ### ${answers.rmDescription}
  ## Title
  ### ${answers.rmTitle}
  ## Installation
  ### ${answers.rmInstallation}
  ## Usage
  ### ${answers.rmUsage}
  ## Authors
  ### ${answers.rmAuthors}
  ## Github
  ### ${answers.rmGitHub}
  ## Email
  ### ${answers.rmEmailAddress}
  ## Testing Instructions
  ### ${answers.rmTestingInstructions}
  ## License 
  ### ${answers.rmLicense}
`;
}
    


module.exports = generateMarkdown;
