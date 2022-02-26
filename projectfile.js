//Access to the local file system
const fs = require(`fs`)

// Install the `inquirer` dependency HERE
const inquirer = require(`inquirer`)

//here we will create a function to generate a mark down of the README.MD
function generateMarkDown(data) {
return ` # ${data.title}`;
}

// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) { }

//  Create a function that returns the license link
function renderLicenseLink(license) { }


//  Create a function that returns the license section of README
function renderLicenseSection(license) { }

// Have to create a promt for user input 
const questions = [{
    type: `input`,
    name: `uaername`,
    message: `Enter your Github username`,
    // will have to validate that they enter one word 
    valdiate: function (answer) {
        if (answer.length <1){
            return console.log(`please enter a Github UserName`)
        }
        return (true)
    }
}, 

{ 
    // This is input for repo name 
    type: `input`,
    name: `repository`,
    message: `Enter the title of your project`,
    // will have to validate that they entered something cannot be blank
    valdiate: function (answer) {
        if (answer.length <1 ){
            return console.log(`Please Enter the title of your project!`)
        }
        return (true)
    }
},
{
    // this is input descrption
    type: `iniput`,
    name: `Description`,
    message: `Enter the description of your project`,
    // will have to validate that they entered something cannot be blank 
    valdiate: function (answer){
        if (answer.length <1 ){
            return console.log(`Please Enter a description of your project!`)
        }
        return (true)
    }
},

{
    // Explain how the user can install project if necessary
    type: `iniput`,
    name: `insallation`,
    message: `Explain how user would install (if necessary) for Installation Section. `,  
    // Validation not required if question is optional
},

{
    // Explain The usage for the project
    type: `iniput`,
    name: `usage`,
    message: `Enter your project instructions and examples of it in use for Usage Section. `,  
},
{
    // List of license
    type: `list`,
    name: `License`,
    message: `Enter what Lincese you would like to have on your readme `,  
    Choices: [	`afl-3.0`, `apache-2.0`, `artistic-2.0`, `bsl-1.0`, `bsd-2-clause`, `bsd-3-clause`, bsd-3-clause-clear, 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'agpl-3.0', 'gpl', 'gpl-2.0', 'gpl-3.0', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'isc', 'lppl-1.3c', 'ms-pl', 'mit', 'mpl-2.0', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'unlicense', 'zlib' ]
},
{
    type: `input`,
    name: `contributing`,
    message: 'Explain how users can contribute to your project (if necessary).',
     // Validation not required if q is optional
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide tests for project, and explain how to test (if necessary).',
    // Validation not required if q is optional
},
{
    type: 'input',
    name: 'email',
    message: ' Please Provide an Email',
    function (answer){
        if (answer.length <1){
        return console.log(`Please provide a valid email`)
        }
        return(true)
    }
},
];
