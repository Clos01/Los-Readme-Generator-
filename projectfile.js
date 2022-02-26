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
    type: `iniput`,
    name: `insallation`,
    message: `Explain how the user can install your project `,
   
}



]
