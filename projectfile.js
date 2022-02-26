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

}]
