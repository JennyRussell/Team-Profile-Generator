const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// function initiates the application
appStart = () => {
    managerInfo();
};

teamMemberArray = [];

function managerInfo() {
    inquirer.prompt([{
            type: 'input',
            name: 'nameOfManager',
            message: "Please enter the name of the manager employee."
        },
        {
            type: 'input',
            name: 'emailOfManager',
            message: "Please enter the email of the manager employee."
        },
        {
            type: 'input',
            name: 'idOfManager',
            message: "Please enter the id number of the manager employee."
        },
        {
            type: 'input',
            name: 'officeNumOfManager',
            message: "Please enter the office phone number of the manager employee."
        },
    ]).then((answers) => {
        let manager = new Manager(answers.nameOfManager, answers.emailOfManager, answers.idOfManager, answers.officeNumOfManager, "Manager")
        teamMemberArray.push(manager)
        console.log(teamMemberArray);
        // next();

    })
}

function engineerInfo() {
    inquirer.prompt([{
            type: 'input',
            name: 'nameOfEngineer',
            message: "Please enter the name of the engineer employee."
        },
        {
            type: 'input',
            name: 'emailOfEngineer',
            message: "Please enter the email of the engineer employee."
        },
        {
            type: 'input',
            name: 'idOfEngineer',
            message: "Please enter the id number of the engineer employee."
        },
        {
            type: 'input',
            name: 'githubOfEngineer',
            message: "Please enter the github profile name of the engineer employee."
        },
    ]).then((answers) => {
        let engineer = new Engineer(answers.nameOfEngineer, answers.emailOfEngineer, answers.idOfEngineer, answers.githubOfEngineer, "Engineer")
        teamMemberArray.push(engineer)
        console.log(teamMemberArray);
        // next();

    })
}

function internInfo() {
    inquirer.prompt([{
            type: 'input',
            name: 'nameOfIntern',
            message: "Please enter the name of the intern employee."
        },
        {
            type: 'input',
            name: 'emailOfIntern',
            message: "Please enter the email of the intern employee."
        },
        {
            type: 'input',
            name: 'idOfIntern',
            message: "Please enter the id number of the intern employee."
        },
        {
            type: 'input',
            name: 'schoolOfIntern',
            message: "Please enter the name of the school the intern employee attended."
        },
    ]).then((answers) => {
        let intern = new Intern(answers.nameOfIntern, answers.emailOfIntern, answers.idOfIntern, answers.schoolOfIntern, "Intern")
        teamMemberArray.push(intern)
        console.log(teamMemberArray);
        // next();

    })
}



// next() {
//     inquirer.prompt({
//         type: 'list',
//         name: "next",
//         message: "Choose your team from the following:",
//         choices: [
//             "Manager",
//             "Engineer",
//             "Intern",
//             "Done"

//         ]
//     })
// }

appStart();