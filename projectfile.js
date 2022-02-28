//Access to the local file system
const fs = require(`fs`)

// Install the `inquirer` dependency HERE
const inquirer = require(`inquirer`)

//here we will create a function to generate a mark down of the README.MD
function generateMarkDown(data) {
return ` # ${data.title}`;
}

 

// Have to create a promt for user input 
const Questions = [{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
    // validate that user entered at least one word
    // https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a GitHub username.");
        }
        return true;
    }
},

{
    type: 'input',
    name: 'repository',
    message: 'Enter the name of your repository on GitHub.',
    // We need to validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter the name of your GitHub repository.");
        }
        return true;
    }
},

{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project.',
    // validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter the title of your project.");
        }
        return true;
    }
},



{
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project.',
    // We need to validate that user entered at least one word
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("You must enter a description for your project.");
        }
        return true;
    }
},
// Project Installation
{
    type: 'input',
    name: 'installation',
    message: 'Explain how user would install (if necessary) for Installation Section.',
    // Validation not required if question is optional
},
// Usage of project
{
    type: 'input',
    name: 'usage',
    message: 'Enter your project instructions and examples of it in use for Usage Section.',
},
// Select license
{
    type: 'list',
    name: 'license',
    message: 'Choose your license for your project.',
    // https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository
    choices: ['afl-3.0', 'apache-2.0', 'artistic-2.0', 'bsl-1.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib']

},
// Contributing to project
{
    type: 'input',
    name: 'contributions',
    message: 'Explain how users can contribute to your project (if necessary).',
    // Validation not required if q is optional
},
// Test for project
{
    type: 'input',
    name: 'test',
    message: 'Provide tests for project, and explain how to test (if necessary).',
    // Validation not required if q is optional
},



{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},

];
// Create a function to write README file
function writeToFile(input) {
    var readMeText = `# ${input.title}
##Table of Contents 
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Testing](#testing)
[Questions](#questions)
## Description 
${input.description}
## Installation 
${input.installation}
## Usage
${input.usage}
## License
${input.license}
## Contributing
${input.contributions}
## Testing
${input.test}
## Questions 
(${input.github})
${input.email}`


//https://nodejs.dev/learn/writing-files-with-nodejs refrenced documentation 

fs.writeFile('./readme.md', readMeText, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written -ok
})
}


// Reference: https://www.npmjs.com/package/util.promisify
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(Questions)
        .then((answers) => {
            writeToFile(answers)

        })

}

// Function call to initialize app
init();